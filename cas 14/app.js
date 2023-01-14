//Zadatak 1
//vrati index trazenog elementa u nizu
// niz = [48, 12, 2, 23, 4, 5, 6, 7, 4, 2, 1, 2];
// elementKojiTrazimo = prompt("unesite broj elementa koji trazimo");
// for (let i = 0; i <= niz.length; i++) {
//   if (niz[i] == elementKojiTrazimo) {
//     console.log(i);
//     break;
//   }
// }

//Zadatak 2
// napisi program koji udvostrucuje svaki drugi celi broj na listi
// pocevsi sa leve strane

// const niz = [1, 2, 3, 4, 5, 6];
// noviNiz = [];
// for (let i = 0; i < niz.length; i++) {
//   if (i % 2 == 0) {
//     noviNiz.push(niz[i] * 2);
//     continue;
//   } else {
//     noviNiz.push(niz[i]);
//   }
// }
// console.log(noviNiz);

//Zadatak 3
//dat je string i ako se u str nalazi vise velikih slova pretvoriti ga u ceo u velika slova
//ako ima vise malih ceo str u mala slova

// str = "Ako StriNg iMA VISE veliKih slOVA...";
// malaSlova = "";
// velikaSlova = "";

// for (i = 0; i <= str.length; i++) {
//   if (str[i] === " ") {
//     continue;
//   } else if (str[i] === str[i].toLowerCase()) {
//     malaSlova++;
//   } else {
//     velikaSlova++;
//   }
// }

// if (malaSlova > velikaSlova) {
//   console.log(str.toLowerCase());
// } else if (malaSlova < velikaSlova) {
//   console.log(str.toUpperCase());
// } else {
//   console.log("isti je broj velikih i malih slova");
// }

//Zadatak 4
//napisi program koji uzima niz stringova kao argument i vraca sortirani niz koji
// sadrzi iste strignove samo poredjane od najmanjeg ka najvecem

// str = ["teleskopi", "naocare", "sunce", "laptop"];
// // debugger;
// for (i = 0; i < str.length; i++) {
//   for (j = i + 1; j < niz.length; j++) {
//     if (niz[i].length > niz[j].length) {
//       let pom = niz[i];
//       niz[i] = niz[j];
//       niz[j] = pom;
//     }
//   }
// }
// console.log(niz);

//Zadatak 5

// niz = [10, 32, 53, 5, 2, 5, 5, 5, 34, 2, 2, 5, 6, 2, 1, 3, 2];
// unesite = string(
//   prompt("unesite sta zelite da znate index ili value najmanjeg broja u nizu")
// );
// min = niz[0];
// indexmin = 0;

// for (let i = 0; i < niz.length; i++) {
//   if (niz[i] < min) {
//     min = niz[i];
//     indexmin = i;
//   }
// }
// if (unesite === "value") {
//   console.log(min);
// } else {
//   console.log(indexmin);
// }

//Zadatak 6
//Dati niz s koji se sastoji od rijeci i razmaka,
//vratite duzinu poslednje reci u nizu
