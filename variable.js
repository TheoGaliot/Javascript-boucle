//activation du mode stricte
"use strict";

// déclarations de variables
var number = 42;
var number2 = 3.14;
var boolean = true;
var boolean2 = false;
var text = "Salut tout le monde !";
var myArray =[number, number2, boolean, boolean2, text];

// ajout de code html dans la balise body
document.write(number+"<br/>");
document.write(number2+"<br/>");
document.write(text+"<br/>");

// structure de contrôle
if (boolean==true){
  document.write('<div id="boolean-value">boolean est égal à true</div>');
}

// structure de contrôle avec boolean2

if (boolean2==false){
  document.write('<div id="boolean2-value">boolean2 est égal à false </div>');
}

if (boolean2!=true){
  document.write('<div id="boolean2-value">boolean2 n\'est pas égal à true </div>');
}

//boucler sur myArray et afficher toutes les valeurs
// qui sont différentes de true ou false

for (var i = 0; i < myArray.length; i++) {
  if (myArray[i] != false && myArray[i] != true) {
    document.write(myArray[i] + "<br />");
  }
}
