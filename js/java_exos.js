// ceci est un commentaire sur une ligne
/*ceci est un commentaire multi lignes*/

//AFFICHAGE
//on peut afficher les résultats de nos programmes via la console.
// console.log("Hello world!");

//LES VARIABLES
//Une veriable est une entité informatique qui sert de conteneure a une donnée.
//Toute donnée fournie à un ordinateur est stockée dans une zone mémoire repérable
//par la machine grâce à une adresse mémoire. Une variable est crée pour contenir cette adresse mémoire.
//la valeur est donc stockée quelque part dans la RAM. La variable contient l'adresse à laquelle
//la machine peut aller récupérer cette valeur.

//DECLARATION DE VARIABLE
//-let
//-var
//-const

// const permet de déclarer une constante nommée.
//Elle doit être initaialisée dès sa déclaration et ne peut plus changer de valeur
//dans la suite du script
// const maConstante = "ma constante";
// console.log(maConstante);

//var permet de déclarer une variable globale qu'on peut modifier
// même si elle est déclarée à l'intérieur du bloc.

// if (true) {
//   var varGlobale = 5;
// }
// console.log("varGlobale =", varGlobale);
// //let permet de déclarer une variable de bloc. Elle n'est accessible que dans le
// //bloc auquel elle appartient.
// if (true) {
//   let varLocale = 5;
//   console.log("varlocale depuis son bloc =", varLocale);
// }

// Une variable doit être déclarée AVANT d'être utilisée.
//Le code suivant génère une erreur:
//console.log(typeof bonjour);
//let bonjour = "bonjour";

// num = 6;
// num += 5;
// var num;

// Une variable possède:
// - un NOM
//doit commencer par une lettre, un tiret bas (_) ou un symbol $
// les caractères qui suivent peuvent être des chiffres et ou des lettres.
//la convention camelCase s'applique pour les variables et les fonctions.

//-TYPE DE DONNEE
//6 types primitifs de données:

//1.null
// var maVariableNulle = null;

// //2.undefiened
// var maVariableUndefined = undefined;
// //ces deux types permettent de vider une variable, mais ne sont pas identiques:
// console.log("maVariableNulle =", maVariableNulle);
// console.log(" maVariableUndefined =", maVariableUndefined);

// console.log(typeof maVariableNulle, maVariableNulle);
// console.log(typeof maVariableUndefined, maVariableUndefined);

// var nom = "Duplex";
// var prenom = "Alain";
// var job = "Boulanger";
// var age = 26;
// var working = true;
// console.log(
//   "nom : " +
//     nom +
//     " prénom : " +
//     prenom +
//     " métier exercé : " +
//     job +
//     " son âge : " +
//     age +
//     " ans" +
//     " il travaille :" +
//     working
// );
// var nom = "Morgan";
// var prenom = "Sean";
// var job = "Ecrivain";
// var age = age + 2;
// var working = false;
// console.log(
//   "nom : " +
//     nom +
//     " prénom : " +
//     prenom +
//     " métier exercé : " +
//     job +
//     " son âge : " +
//     age +
//     " ans" +
//     " il travaille :" +
//     working
// );

// let oiseau = {
//   espece: "Pie",
//   age: "3 mois",
//   habitat: "ville",
// };
// for (let animal in oiseau) {
//   console.log(animal);
//   console.log(oiseau[animal]);
// }

// let peintures = new Array("La jaconde", "L'homme au gant", "Le pandémonium");
// document.write("<h2>Liste de peintures</h1>");
// document.write("<p><ul>");
// for (let peinture of peintures) {
//   document.write(`<li>${peinture}</li>`);
// }
// document.write("</ul></p>");

// let indexPeinture = null;
// let peintureRecherchee = "L'homme au gant";
// for (let i = 0; i < peintures.length; i++) {
//   if (peintures[i] === peintureRecherchee) {
//     indexPeinture = i;
//     break;
//   }
// }
// if (indexPeinture) {
//   document.write(
//     "la peinture nommée" +
//       peintureRecherchee +
//       "est en position numéro :" +
//       (indexPeinture + 1) +
//       "dans la liste."
//   );
// } else {
//   document.write("la peinture n'existe pas dans la liste.");
// }
// let i = 0;

// let num = 0;

// while (i < 5) {
//   console.log(
//     "tour de boucle n° " +
//       (i + 1).toString() +
//       " => i = " +
//       i +
//       ", num = " +
//       num
//   );

//   i++;

//   if (i === 3) {
//     continue;
//   }

//   num += i;
// }

// for (let i = 0; i < 10; i++) {
//   document.write("<div>");

//   for (let j = 1; j <= 10; j++) {
//     document.write("<span class='bordered'>" + (i * 10 + j) + "</span>");
//   }
// }
// document.write("</div>");

// let tab = [" element1 ", " element2 ", " element3 "];
// document.write(tab);

// let fruits = ["banana", "apple"];
// let legumes = new Array("citrouille", "courgette");
// console.log(fruits);
// console.log(legumes);

// fruits.forEach(function (element, index, array) {
//   console.log(index, element);
// });

//LES FONCTIONS
// const article = document.querySelector("article");
// console.log(article);

// article.innerHTML = "<h2>Les Fonctions</h2>";
// const carre = (nombre) => {
//   console.log(nombre);
//   article.innerHTML += `<p>${9 * 9}</p>`;
// };
// carre(9);

// var animal = "orang-outang";

// const mafonction2 = function () {
//   let animal = "Pingouin";
//   let autreAnimal = "Escargot";
//   console.log(animal);
//   return autreAnimal;
// };
// let resultatMaFonction2 = mafonction2();
// console.log(animal);
// console.log(resultatMaFonction2);

// function ecrire(texte) {
//   mafonction2.innerHTML += `<p><i>${texte}</i></p>`;
//   return texte.length;
// }
// let tailleTexte = ecrire("Bonsoir");
// ecrire("le texte fait" + tailleTexte + "caractère");

// function ecrire2(texte) {
//   if (texte.length <= 50) {
//     let taille = ecrire(texte);
//     return taille;
//   } else {
//     mafonction2.innerHTML += `<p><i>texte trop long ${texte}</i></p>`;
//     return 0;
//   }
// }
// var tailleChaine = ecrire2(
//   "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjdhhhhhhhhhhhffffffffffffffffffffffffffffffff"
// );
// console.log(tailleChaine);
// function salutation(name) {
//   if (name) {
//     alert("bonjour " + name);
//   }
// }
// function processUserInput(callback) {
//   let nom = prompt("fonction processUserInput: Entrez votre nom.");
//   typeof callback === "function" && callback(nom);
// }
// processUserInput(salutation);
// console.log(navigator.connection);

// var docChildren = document.children;
// console.log(docChildren);
// var docNodes = document.childNodes;
// console.log(docNodes);

// function ready(callback) {
//   // in case the document is already rendered
//   if (document.readyState != "loading") callback();
//   // modern browsers
//   else if (document.addEventListener)
//     document.addEventListener("DOMContentLoaded", callback);
//   // IE <= 8
//   else
//     document.attachEvent("onreadystatechange", function () {
//       if (document.readyState == "complete") callback();
//     });
// }
// ready(function () {
//   const commentaire = document.querySelector("textarea");
//   const compteurDecroissant = document.querySelector("#compteur");
//   const btn = document.querySelector("button");
//   console.log(btn);

//   commentaire.addEventListener("keyup", function (e) {
//     let caracteresRestants = 300 - parseInt(this.value.length);
//     compteurDecroissant.innerHTML = caracteresRestants;
//     if (caracteresRestants > 20) {
//       compteurDecroissant.setAttribute("style", "");
//     } else if (caracteresRestants >= 0 && caracteresRestants <= 20) {
//       compteurDecroissant.style.color = "orange";
//     } else {
//       compteurDecroissant.style.color = "red";
//     }
//   });
// });
const image = document.querySelector(".d_none");
const btn = document.querySelector("#openImage");
image.style.display = "none";
btn.onclick = () => {
  if (image.style.display === "none") {
    image.style.display = "block";
  } else {
    image.style.display = "none";
  }
};
const squareIt = (x) => {
  return x * x;
};
console.dir(squareIt);

const boiteDialogue = document.getElementById("text_part1");
const boiteDialogue2 = document.getElementById("text_part2");
const userA = document.getElementById("userA");
console.log(userA);
const userB = document.querySelector(".userB");

userA &&
  userA.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
      alert("125");
    }
  });
