// Import the functions you need from the SDKs you need
var { initializeApp } = require("firebase/app");

var { getFirestore } = require("firebase/firestore");
const { getStorage } = require("firebase/storage");
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeknOwVvnwhbR_Bo7qOG09yFBYtJz4JfM",
  authDomain: "project-ejs-67764.firebaseapp.com",
  projectId: "project-ejs-67764",
  storageBucket: "project-ejs-67764.appspot.com",
  messagingSenderId: "446093985386",
  appId: "1:446093985386:web:786d17f0b319c38c4d2c13",
  measurementId: "G-PTJCJQ5CVG",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

module.exports = { db, storage };
