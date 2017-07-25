"use strict";

var data = [

  {

    id : 243,

    name: "user 2",

    scores: [76, 64, 10, 67, 64]

  },

  {

    id : 123,

    name: "user 1",

    scores: [42, 100, 54, 65, 32]

  },

  {

    id : 768,

    name: "user 3",

    scores: [93, 2, 58, 78, 100]

  }];

// intégrer bootstrap pour faire les tableaux

// à partir de ces données :

//   afficher une table html contenant le nom des utilisateurs et leurs scores, trié par nom d'utilisateur

//   afficher un tableau html contenant le nom utilisateur et leurs scores moyen, trié par nom d'utilisateur

//   afficher un tableau html contenant les 5 meilleurs scores et le nom de l'utilisateur, trié par ordre décroissant, puis par ordre d'utilisateurs

//

// indices :

// -vous pouvez parcourir le tableau de données avec une boucle for

// -pour lire le nom : user.name

// -pour lire tableau de scores : user.scores

//

// document.querySelector('#list-all').innerHTML + "";

// document.querySelector('#list-all').innerHTML + document.querySelector('#list-all').innerHTML ;

// document.querySelector('#list-sores').innerHTML + "";

// document.querySelector('#list-average').innerHTML + "";

// exemple de création de code html en js et injection du code dans un élément

var html = "";

html = html + "<table class='table'>"

for(var i = 0; i <data.length; i++) {
html =  html + "<tr><td>" + data[i].name + "</td><td>" +
data[i].scores + "</td></tr>";

}

html = html + "</table>";

document.querySelector("#tableau").innerHTML = html;
