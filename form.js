const firebaseConfig = {
  apiKey: "AIzaSyAVkBH5jAKti3ZGBRg-SW8xTX4pIimSDE0",
  authDomain: "portfolio-e6935.firebaseapp.com",
  projectId: "portfolio-e6935",
  storageBucket: "portfolio-e6935.appspot.com",
  messagingSenderId: "992216091069",
  appId: "1:992216091069:web:9b521ba502548ba1faaad4",
};

firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();
const db = firestore.collection("Ritika");
let submitButton = document.getElementById('submit');
submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  let Name = document.getElementById('name').value;
  let Email = document.getElementById('email').value;
  let Subject = document.getElementById('subject').value;
  let Textarea = document.getElementById('textarea').value;

  db.doc().set({
    name: Name,
    email: Email,
    subject: Subject,
    textarea: Textarea
  }).then(() => {
    console.log("Data Saved");
  }).catch((error) => {
    console.log(error);
  })
  document.getElementById("Ritika-Website").reset();
  alert("Your form has been submit successfully!");

})

