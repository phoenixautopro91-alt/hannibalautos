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

  FICHE DÉTAILLÉE (s'ouvre en grand quand on appuie sur la voiture) — tout est optionnel :
    version : "1.0 SCe 75 ch Ambiance"          -> la ligne sous le nom
    texte   : "Berline fiable et ..."            -> le petit texte de l'annonce
    travaux : ["Kit d'embrayage neuf", ...]       -> « Fait dans notre atelier » (coches dorées)
    atouts  : ["Crit'Air 1", ...]                 -> « Points forts »
    infos   : { "Couleur": "Blanc", ... }         -> tableau « Caractéristiques »
  S'il manque une rubrique, elle ne s'affiche simplement pas.
*/
window.VOITURES = [
  { statut: "vente", marque: "Dacia", modele: "Logan", annee: 2017, km: 99871, carburant: "Essence", boite: "Manuelle", prix: 4980, lien: "https://www.leboncoin.fr/ad/voitures/3297364306",
    version: "1.0 SCe 75 ch Ambiance",
    texte: "Berline fiable et économique, avec un faible kilométrage pour son année. Grand coffre, 5 vraies places et un entretien simple et peu coûteux. Idéale pour un jeune conducteur ou comme voiture du quotidien.",
    atouts: ["Crit'Air 1 : accès aux zones à faibles émissions (ZFE)", "4 CV fiscaux : carte grise et assurance moins chères", "Moteur essence 1.0 SCe simple et sobre", "Grand coffre et 5 vraies places", "Contrôle technique valide"],
    infos: { "1re mise en circulation": "03/2017", "Puissance": "75 ch · 4 CV", "Carrosserie": "Berline · 4 portes · 5 places", "Couleur": "Blanc", "Sellerie": "Tissu", "Norme": "Euro 6 · Crit'Air 1", "Contrôle technique": "Valide" },
    photos: ["img/voitures/logan-01.jpg", "img/voitures/logan-02.jpg", "img/voitures/logan-03.jpg", "img/voitures/logan-04.jpg", "img/voitures/logan-05.jpg", "img/voitures/logan-06.jpg", "img/voitures/logan-07.jpg", "img/voitures/logan-08.jpg", "img/voitures/logan-09.jpg", "img/voitures/logan-10.jpg", "img/voitures/logan-11.jpg", "img/voitures/logan-12.jpg", "img/voitures/logan-13.jpg"] },
  { statut: "vente", marque: "Renault", modele: "Grand Modus", annee: 2009, km: 215926, carburant: "Diesel", boite: "Manuelle", prix: 2780, lien: "https://www.leboncoin.fr/ad/voitures/3297367282",
    version: "1.5 dCi 86 ch",
    texte: "Petit monospace économique, pratique en ville, pour une famille ou un jeune conducteur. Les gros travaux ont été faits dans notre atelier : moteur remplacé, distribution et embrayage neufs.",
    travaux: ["Moteur remplacé (octobre 2026)", "Kit de distribution et pompe à eau neufs", "Kit d'embrayage neuf", "Vidange moteur et filtre à huile", "Vidange de la boîte de vitesses", "Climatisation rechargée", "Contrôle technique OK"],
    atouts: ["Diesel sobre, 5 CV fiscaux", "Attelage", "Grand volume intérieur, 5 places"],
    infos: { "1re mise en circulation": "11/2009", "Puissance": "86 ch · 5 CV", "Carrosserie": "Monospace · 5 portes · 5 places", "Couleur": "Beige", "Sellerie": "Tissu", "Norme": "Euro 4 · Crit'Air 3", "Contrôle technique": "Valide", "Équipement": "Attelage", "Historique": "5 propriétaires" },
    photos: ["img/voitures/modus-01.jpg", "img/voitures/modus-02.jpg", "img/voitures/modus-03.jpg", "img/voitures/modus-04.jpg", "img/voitures/modus-05.jpg", "img/voitures/modus-06.jpg", "img/voitures/modus-07.jpg", "img/voitures/modus-08.jpg", "img/voitures/modus-09.jpg", "img/voitures/modus-10.jpg", "img/voitures/modus-11.jpg", "img/voitures/modus-12.jpg", "img/voitures/modus-13.jpg"] },
  { statut: "vente", marque: "Citroën", modele: "C4 Picasso", annee: 2013, km: 156880, carburant: "Diesel", boite: "Automatique", prix: 4280,
    version: "1.6 e-HDi 110 ch Music Touch",
    texte: "Monospace familial 5 places, spacieux et très lumineux grâce à son grand pare-brise panoramique. Boîte automatique pilotée 6 rapports et moteur diesel e-HDi avec Stop & Start, agréable et sobre au quotidien. Distribution, vidange et filtres faits dans notre atelier.",
    travaux: ["Kit de distribution et pompe à eau neufs", "Vidange moteur et filtre à huile neuf", "Filtre à air et filtre d'habitacle neufs", "Additif du filtre à particules (FAP) refait", "Liquide de refroidissement remplacé", "Pulseur d'air (ventilation) remplacé", "Retouches de peinture"],
    atouts: ["Boîte automatique pilotée 6 rapports", "Diesel e-HDi avec Stop & Start", "Grand pare-brise panoramique", "Jantes en alliage", "Crit'Air 2"],
    infos: { "1re mise en circulation": "02/2013", "Puissance": "110 ch · 6 CV", "Carrosserie": "Monospace · 5 portes · 5 places", "Couleur": "Gris argent", "Norme": "Euro 5 · Crit'Air 2" },
    photos: ["img/voitures/c4picasso-01.jpg", "img/voitures/c4picasso-02.jpg", "img/voitures/c4picasso-03.jpg", "img/voitures/c4picasso-04.jpg", "img/voitures/c4picasso-05.jpg", "img/voitures/c4picasso-06.jpg", "img/voitures/c4picasso-07.jpg", "img/voitures/c4picasso-09.jpg", "img/voitures/c4picasso-10.jpg", "img/voitures/c4picasso-11.jpg", "img/voitures/c4picasso-12.jpg"] },
  { statut: "preparation", marque: "Peugeot",    modele: "107" },
  { statut: "preparation", marque: "Renault",    modele: "Twingo III" },
  { statut: "preparation", marque: "Alfa Romeo", modele: "MiTo" }
];
