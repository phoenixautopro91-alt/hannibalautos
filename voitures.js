/*
  LISTE DES VOITURES DU SITE HANNIBAL AUTOS
  C'est le SEUL fichier à modifier pour ajouter, changer ou retirer une voiture.
  Le reste du site ne bouge pas.

  statut : "preparation"  -> voiture achetée, pas encore prête (on affiche seulement marque + modèle)
           "vente"        -> voiture prête et en vente (photo, infos, prix, lien Leboncoin)
           "vendue"       -> (optionnel) garder la voiture avec un tampon VENDUE

  Exemple d'une voiture en vente :
  { statut: "vente", marque: "Dacia", modele: "Logan", annee: 2017, km: 99742,
    carburant: "Essence", boite: "Manuelle", prix: 6990,
    photo: "img/voitures/logan-1.jpg", lien: "https://www.leboncoin.fr/ad/voitures/..." },
*/
window.VOITURES = [
  { statut: "preparation", marque: "Peugeot",    modele: "107" },
  { statut: "preparation", marque: "Renault",    modele: "Modus" },
  { statut: "preparation", marque: "Dacia",      modele: "Logan" },
  { statut: "preparation", marque: "Citroën",    modele: "C4 Picasso" },
  { statut: "preparation", marque: "Renault",    modele: "Twingo" },
  { statut: "preparation", marque: "Alfa Romeo", modele: "MiTo" }
];
