"use strict";

//déclaration et initialisation d'un tableau vide
var myArray =[];
//déclaration et initialisation d'un tableau avec 3 élements
var myArray2 = [123, 42, 3.14, "Hello"];

//inspection des tableaux dans la console
console.log(myArray);
console.log(myArray2);

// ajout d'éléments dans un tableau

myArray.push(123);
myArray.push(42);
myArray.push(3.14);
myArray.push("Hello");

// inspection des tableaux dans la console
console.log(myArray);
console.log(myArray2);

// si le tableau
//afficher le premier élément d'un tableaux
if (myArray.length > 0 ) {
console.log(myArray[0]);
}

//afficher la taille d'un tableau
console.log(myArray.length);

//afficher le dernier élément d'un tableau
if (myArray.length > 0 ) {
console.log(myArray[myArray.length - 1])
}

// modifier le premier élément
if (myArray.length > 0 ){
  myArray[0] = 1;
}

//si le tableau contient au moins un élement,
// modifier le dernier élément
if(myArray.length > 0) {
  myArray[myArray.length - 1] = "Salut" 
}

//supprimer le deuxième élément d'un tableau

  myArray.splice(1, 1);
  console.log(myArray);

//supprimer la valeur 3.14 du tableau
  myArray.splice(1, 1);
  console.log(myArray);
