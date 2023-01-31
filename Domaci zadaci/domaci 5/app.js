// Dati niz s koji se sastoji od rijeci i razmaka,
// vratite duzinu poslednje reci u nizu

// let niz = "Amin laptop ime lenovo thinkpad";

// let duzinaPoslednjeReci = 0;
// let poslednjiRazmak = -1;

// for (let i = 0; i < niz.length; i++) {
//   if (niz[i] == " ") {
//     poslednjiRazmak = i;
//   }
// }
// if (poslednjiRazmak >= 0) {
//   duzinaPoslednjeReci = niz.length - poslednjiRazmak - 1;
// }
// console.log(duzinaPoslednjeReci);

//Nacin 2
// .split koristimo  da bi pretvorili string u niz i da bi separetali dati niz na delove i od
// let niz = "Amin laptop ime lenovo thinkpad";
//dobijamo ----> let niz = ["amin" , "laptop" , "ime" , "lenovo" , "thinkpad"];
//kod ovoga crtica izmedju reci moz da znaci da ga ne odvajamo npr amin-laptop ime...
//aminlaptop ce da se ispise sastavljeno

// const niz = str.split(" ");
// console.log(niz);
// console.log(niz[niz.length - 1].length);
