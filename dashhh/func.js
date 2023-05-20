function supprimerLigne(element) {
  var row = element.parentNode.parentNode; // Récupère la ligne parente (tr)
  row.parentNode.removeChild(row); // Supprime la ligne du tableau
}
