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
    var database = firebase.database();
var dataRef = firebase.database().ref('data');

dataRef.once("value").then(function(snapshot) {
  var data = snapshot.val();
  var tableBody = document.querySelector("#data-table tbody");

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      var rowData = data[key];
      var row = document.createElement("tr");

      var adresseCell = document.createElement("td");
      adresseCell.textContent = rowData.adresse_de_reclamation;
      row.appendChild(adresseCell);

      var municipaliteCell = document.createElement("td");
      municipaliteCell.textContent = rowData.municipalite;
      row.appendChild(municipaliteCell);

      var latitudeCell = document.createElement("td");
      latitudeCell.textContent = rowData.latitude;
      row.appendChild(latitudeCell);

      var longitudeCell = document.createElement("td");
      longitudeCell.textContent = rowData.longitude;
      row.appendChild(longitudeCell);

      var villeCell = document.createElement("td");
      villeCell.textContent = rowData.ville;
      row.appendChild(villeCell);

      var wasteTypeCell = document.createElement("td");
      wasteTypeCell.textContent = rowData.waste_type;
      row.appendChild(wasteTypeCell);

      tableBody.appendChild(row);
    }
  }
});