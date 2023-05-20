const firebaseConfig = {
  apiKey: "AIzaSyDBh8RH6bfPsfbhjUoYxYM1xwLuhBZMrfI",
  authDomain: "cleanup-96db1.firebaseapp.com",
  databaseURL: "https://cleanup-96db1-default-rtdb.firebaseio.com",
  projectId: "cleanup-96db1",
  storageBucket: "cleanup-96db1.appspot.com",
  messagingSenderId: "395749114288",
  appId: "1:395749114288:web:55cec4d678833333d81675",
  measurementId: "G-8XT4MCC635"
};

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

// let's code 
var datab  = firebase.database().ref('data');
function UserRegister(){ 
var email = document.getElementById('eemail').value;
var password = document.getElementById('lpassword').value;
firebase.auth().createUserWithEmailAndPassword(email,password).then(function(){
    
}).catch(function (error){
    var errorcode = error.code;
    var errormsg = error.message;
});
}
const auth = firebase.auth();
function SignIn(){
    var email = document.getElementById('eemail').value;
    var password = document.getElementById('lpassword').value;
    const promise = auth.signInWithEmailAndPassword(email,password);
    promise.catch( e => alert(e.msg));
   window.open("dashhh/dash.html") 
}
document.getElementById('form').addEventListener('submit', (e) => {
    e.preventDefault();
    var userInfo = datab.push();
    userInfo.set({
        name: getId('fname'),
        email : getId('eemail'),
        NIF : getId('Num'),
        ville :getId('select1'),
        Municipalité: getId('select2'),
        password : getId('lpassword')
    });
    alert("inscription réussie");
    console.log("sent");
    document.getElementById('form').reset();
});
function  getId(id){
    return document.getElementById(id).value;
}


