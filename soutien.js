var hasCreditCard = false;
var accountBalance = 80;
var itemCost = 443;

// un utilisateur veut faire un achat
// vérifier qu'il possède une carte bancaire ou que son compte perso est suffisamment aprovisionné
// si les deux conditions sont vérifiées, privilégiez l'utilisation de son compte perso

// les messages :
// - "vous n'avez pas de moyen de paiement" il n'y a pas de carte et que le compte perso est à 0
// - "votre compte perso a été débité de X, le nouveau solde est Y" si le compte perso est suffisamment approvisionné
// - "votre compte perso n'est pas assez approvisionné, il vous manque X" si le compte n'est pas suffisamment approvisionné et qu'il n'y a pas de carte
// - "vous allez être redirigé sur la page de paiement de votre banque" si le compte perso n'est pas suffisamment approvisionné



if (hasCreditCard == false && accountBalance == 0) {
  console.log("vous n'avez pas de moyen de paiement");
} else if (hasCreditCard == false && accountBalance >= 100){
  console.log("votre compte perso a été débité de " +(itemCost) + " le nouveau solde est " +(accountBalance -= itemCost)+ " €");
} else if (hasCreditCard == false && itemCost > accountBalance) {
  console.log("votre compte perso n'est pas assez approvisionné, il vous manque " + (itemCost - accountBalance) + " €" );
} else {
  console.log("vous allez être redirigé sur la page de paiement de votre banque");
}


var authenticatedWithEmail = false;
var authenticatedWithPhone = true;

if( authenticatedWithEmail == true || authenticatedWithPhone == true) {
  console.log("vous êtes authentifié");
} else {
  console.log("vous n'êtes pas authentifié");
}

// sur un site de e-commerce l'utilisateur doit fournir au moins un email ou un numéro de téléphone pour confirmer sa commande
// vérifier si l'utilisateur peut confirmer sa commande
// sinon dites-lui qu'il doit fournir au moins une des deux informations

var hasEmail = true;
var hasPhone = false;

if (hasEmail || hasPhone) {
console.log("Vous pouvez confirmer votre commande");
} else {
  console.log("Vous devez fournir au moins une des 2 informations");
}
