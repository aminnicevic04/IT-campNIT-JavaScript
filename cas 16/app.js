// zadatak 1
// let broj = prompt("Unesite broj");

// if (isNaN(broj)) {
//   console.log("Niste uneli broj");
// } else {
//   console.log(broj ** 2);
// }

// zadatak 2

let recenica =
  "Nakon danasnjeg testa cemo znati ko ce nastaviti sa drugim ciklusom it campa";

let nova = "";

for (let i = 0; i <= recenica.length; i++) {
  //   console.log(i);
  if (
    recenica[i] === "a" ||
    recenica[i] === "e" ||
    recenica[i] === "i" ||
    recenica[i] === "o" ||
    recenica[i] === "u"
  ) {
    nova += recenica[i].toUpperCase();
  } else if (recenica[i] === undefined) {
    nova += ".";
  } else {
    nova += recenica[i];
  }
}
console.log(nova);
