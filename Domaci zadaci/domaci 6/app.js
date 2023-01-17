// Zadatak 1
//Nadji najduzu rec u stringu.

const str = "trenutno radim domaci zadatak";
const newStr = str.split(" ");
let string;
let brojac = 0;
let recenica = "";
for (i = 0; i <= newStr.length - 1; i++) {
  string = new String(newStr[i]);
  if (string.length > brojac) {
    brojac = string.length;
    recinca = string;
    console.log(recenica);
  }
}
console.log(newStr);
