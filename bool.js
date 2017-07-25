"use strict";

var stock = 0;

//afficher dans la console :

if (stock == 200){
  // - "stock indisponible si le stock est à 0"
  console.log("Stock indisponible");
} else if (stock < 50) {
  // - "stock en faible quantité" si le stock est plus petit que 50
  console.log("stock en faible quantité");
} else if (stock >= 50) {
  // - "stock disponible" si le stock est plus grand ou égal à 50
  console.log("stock disponible");
}

var hasValidAddress = true;
var hasValidatedAgreement = true;

//

if (hasValidAddress == true && hasValidatedAgreement == true){
  console.log("commande en cours");
} else if (hasValidAddress == false && hasValidatedAgreement == false) {
  console.log("vous devez renseigner une adresse");
} else if (hasValidAddress == true && hasValidatedAgreement == false) {
  console.log("vous devez cocher la case Condition de vente");
} else if ( hasValidAddress == false && hasValidatedAgreement == true) {
  console.log("vous devez renseigner une adresse et cocher la case Condition de vente");
}


// mini appli checklist vacance
function check() {
console.log("OK");
}
function check() {
  var gaz = document.getElementById("gaz").checked;

  console.log(gaz);

  var inputs = document.getElementsByTagName("input");

  for (var input of inputs) {
    console.log(input.checked);
  }
  inputs = document.getElementsByClassName("checklist-item");
  for (var input of inputs){
    console.log(input.checked);
  }
  inputs = document.querySelectorAll("div label input.checklist-item");
  for(var input of inputs ) {
    console.log(input.checked);
  }
}

function check() {

  var inputs = document.querySelectorAll("div label input.checklist-item");

  var result = true;
  for (var input of inputs){
    if (!input.checked){
      result = false;
      break;
    }
  }

  if (result) {
    document.querySelector("#message").innerHTML = "vous pouvez y aller";
  } else {
    document.querySelector("#message").innerHTML = "attendez,il reste des choses à faire";
  }
}
