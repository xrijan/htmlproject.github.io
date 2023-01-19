

const firebaseConfig = {
    apiKey: "AIzaSyCAOOH1oU2qyuGjX2rH3277sn27DKhKhtU",
    authDomain: "teamprojecthtml.firebaseapp.com",
    databaseURL: "https://teamprojecthtml-default-rtdb.firebaseio.com",
    projectId: "teamprojecthtml",
    storageBucket: "teamprojecthtml.appspot.com",
    messagingSenderId: "900796617520",
    appId: "1:900796617520:web:92b0e5dba47a55364a2ef5",
    measurementId: "G-ZW85PDNKT4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const database = firebase.database();

function register() {
    var email  = document.getElementById("email").value;
    var password  = document.getElementById("password").value;

    auth.createUserWithEmailAndPassword(email,password).then(() =>{
        var user = auth.currentUser;
        var uid = user.uid;
        console.log(uid);
    })
}