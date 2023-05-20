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





const resetPasswordForm = document.getElementById('resetPasswordForm');

resetPasswordForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const resetEmail = document.getElementById('resetEmail').value;
  
  firebase.auth().sendPasswordResetEmail(resetEmail)
    .then(() => {
      alert("E-mail de réinitialisation du mot de passe envoyé.");
      // La demande de réinitialisation du mot de passe a été envoyée avec succès
      console.log('sent');
      // Vous pouvez rediriger l'utilisateur vers une page de confirmation ou afficher un message à l'utilisateur
    })
    .catch((error) => {
      // Une erreur s'est produite lors de l'envoi de l'e-mail de réinitialisation du mot de passe
      console.error('Erreur lors de l\'envoi de l\'e-mail de réinitialisation du mot de passe :', error);
      // Affichez un message d'erreur à l'utilisateur ou prenez d'autres mesures appropriées
    });
});
