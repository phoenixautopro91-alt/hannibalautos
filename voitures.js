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
  Plusieurs photos : photos: ["img/voitures/logan-01.jpg", "img/voitures/logan-02.jpg", ...]
  (la 1re est celle affichée d'abord ; des boutons permettent d'avancer).
*/
window.VOITURES = [
  { statut: "vente", marque: "Dacia", modele: "Logan", annee: 2017, km: 99871, carburant: "Essence", boite: "Manuelle", prix: 5680,
    photos: ["img/voitures/logan-01.jpg", "img/voitures/logan-02.jpg", "img/voitures/logan-03.jpg", "img/voitures/logan-04.jpg", "img/voitures/logan-05.jpg", "img/voitures/logan-06.jpg", "img/voitures/logan-07.jpg", "img/voitures/logan-08.jpg", "img/voitures/logan-09.jpg", "img/voitures/logan-10.jpg", "img/voitures/logan-11.jpg", "img/voitures/logan-12.jpg", "img/voitures/logan-13.jpg"] },
  { statut: "vente", marque: "Renault", modele: "Modus", annee: 2009, km: 215926, carburant: "Diesel", boite: "Manuelle", prix: 3380,
    photos: ["img/voitures/modus-01.jpg", "img/voitures/modus-02.jpg", "img/voitures/modus-03.jpg", "img/voitures/modus-04.jpg", "img/voitures/modus-05.jpg", "img/voitures/modus-06.jpg", "img/voitures/modus-07.jpg", "img/voitures/modus-08.jpg", "img/voitures/modus-09.jpg", "img/voitures/modus-10.jpg", "img/voitures/modus-11.jpg", "img/voitures/modus-12.jpg", "img/voitures/modus-13.jpg"] },
  { statut: "preparation", marque: "Peugeot",    modele: "107" },
  { statut: "preparation", marque: "Citroën",    modele: "C4 Picasso" },
  { statut: "preparation", marque: "Renault",    modele: "Twingo" },
  { statut: "preparation", marque: "Alfa Romeo", modele: "MiTo" }
];
