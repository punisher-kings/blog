var { query, where } = require("firebase/firestore");
var admin = require("firebase-admin");
var { collection, getDocs, addDoc } = require("firebase/firestore");
const multer = require("multer");
var express = require("express");
const { db } = require("./config");
var bodyParser = require("body-parser");

var app = express();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.originalname);
  },
});
// set the view engine to ejs
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
// use res.render to load up an ejs view file
const upload = multer({ storage: storage });
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

// index page
app.get("/", async function (req, res) {
  let articles = [];
  const querySnapshot = await getDocs(collection(db, "articles"));
  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    articles.push(doc.data());
  });

  res.render("./pages/index", { articles: articles });
});

app.get("/article/:id", async function (req, res) {
  const q = query(collection(db, "articles"), where("docId", "==", req.params.id));

  const querySnapshot = await getDocs(q);
  let articles = [];
  querySnapshot.forEach((doc) => {
    articles.push(doc.data());
  });

  const article = articles.find(function (article) {
    if (article.docId == req.params.id) {
      return article;
    } else {
      console.log("not found");
    }
  });
  console.log(article);
  res.render("./pages/article", { article: article });
});

app.get("/form", function (req, res) {
  res.render("./pages/form");
});

app.post(
  "/create",
  urlencodedParser,
  upload.single("image"),
  async (req, res) => {
    const { title, content } = req.body;

    // Add a new document with a generated id.
    const docRef = await addDoc(collection(db, "articles"), {
      docId: new String(Date.now()),
      title,
      content,
    });
    console.log("Document written with ID: ", docRef.id);
    res.redirect("/");
  }
);

app.listen(8080);
console.log("Server is listening on port 8080");
