// const newArray = ["ja" , "idem" , "u" , "skolu" ];
// const newArray = newArray.join('/');

//Zadatak 1
// izracunaj index telesne mase (bmi = tezina / visina **2)
// bmi <= 18.5 return "mala tezina"
// bmi <= 25.0 return "normalno"
// bmi <= 30 return "prekomerna tezina"
// bmi > 30 return "gojazni"

// tezina = 60;
// visina = 1.72;

// bmi = tezina / visina ** 2;
// if (bmi <= 18.5) {
//   console.log("mala tezina");
// } else if (bmi <= 25.0) {
//   console.log("normalno");
// } else if (bmi <= 30) {
//   console.log("prekomerna tezina");
// } else {
//   console.log(gojazan);
// }

//Zadatak 2
// // nadji dve najstarije osobe, godine su date u nizu

// let niz = [0, 5, 2, 3, 5, 8, 50, 43, 21, 31, 23];

// let najstariji = niz[0];
// let drugiNajstariji = niz[0];

// for (let i = 0; i < niz.length; i++) {
//   if (niz[i] > najstariji) {
//     drugiNajstariji = najstariji;
//     najstariji = niz[i];
//   } else if (niz[i > drugiNajstariji]) {
//     drugiNajstariji = niz[i];
//   }
// }

// console.log(najstariji, drugiNajstariji);

//Zadatak 3
// vrati najmnji broj, najveci broj, i razliku izmedju ta dva broja

// let niz = [1, 2, 3, 4, 5, 34, 45, 3, 90, 99, 67, 12];
// min = niz[0];
// max = niz[0];
// noviNiz = [];
// for (i = 0; i < niz.length; i++) {
//   if (niz[i] > max) {
//     max = niz[i];
//   }
//   if (niz[i] < min) {
//     min = niz[i];
//   }
// }
// noviNiz.push(min);
// noviNiz.push(max);
// noviNiz.push(max - min);
// console.log(noviNiz);

//Zadatak 4
// napisi sledeci pattern pomocu java script
//     *
//    * *
//   * * *
// let str = "";
// let razmak = "";
// for (i = 1; i < 5; i++) {
//   razmak = "";
//   for (j = i + 1; j < 5; j++) {
//     razmak += "";
//   }
//   str += "*";
//   console.log(razmak + str);
// }
