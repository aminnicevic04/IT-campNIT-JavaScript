// Zadatak 1
//Nadji najduzu rec u stringu.

const str = "trenutno radim domaci zadatak";
let rec = str.split(" ");

let najduza = rec.reduce((a, b) => (a.length > b.length ? a : b));
console.log(najduza);

//nacin 2
// const newStr = str.split(" ");
// let string;
// let brojac = 0;
// let recenica = "";
// for (i = 0; i <= newStr.length - 1; i++) {
//   string = new String(newStr[i]);
//   if (string.length > brojac) {
//     brojac = string.length;
//     recinca = string;
//     console.log(recenica);
//   }
// }
// console.log(newStr);
