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

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const db = firebase.firestore();

console.log("first");
