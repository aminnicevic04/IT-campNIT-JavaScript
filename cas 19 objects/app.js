"use strict";

const osoba = {
  prezime: "Mujanovic", //ime je key
  ime: "Hasan",
};

console.log(osoba.ime);
console.log(osoba["ime"]);

osoba.ime = "amin";
osoba["ime"] = "nejla";
console.log(osoba.ime);

// delete osoba.ime; //brisanje nekog keya
console.log(osoba);
console.log(Object.keys(osoba));
console.log(Object.values(osoba));

const auto = {
  marka: "Porshce",
  model: "Panamera",
  godiste: "2018",
  boja: "Crvena",
  vlasnik: "Prvi vlasnik",
};

auto.gume = "Zimske gume";
console.log(Object.values(auto)); //vraca niz vrednosti ovog objecta

// console.log(typeof null) je object

//reduce metoda
let niz = [10, 5, 4, 3, 2, 1, 5];
// reduce((prethodno, trenutno) => prethodno + trenutno.initialValue);
let suma = niz.reduce(
  (prethodno, trenutno) => prethodno + trenutno,
  0 //0 je inicijalna vrednost tj. vrednost od koje pocinjemo operaciju
);
console.log(suma);

// function saberi(prethodno, trenutno) {
//   return prethodno + trenutno;
// }
let niz1 = [10, 5, 4];
// reduce((prethodno, trenutno) => prethodno + trenutno.initialValue);

let mnozenje = niz1.map((prethodno) => prethodno * 2);
let suma1 = niz1.reduce((prethodno, trenutno) => prethodno + trenutno, 0);
console.log(suma1);
console.log(mnozenje);

let mnozenje1 = niz1.reduce(
  (prethodno, trenutno) => prethodno + trenutno * 2,
  0
);
console.log(mnozenje1);

const imena = [
  "amar",
  "amin",
  "amin",
  "hasan",
  "lejla",
  "dzenis",
  "hamdija",
  "maki",
];

const nalazenje = function (ime) {
  if (imena.indexOf("lejla") === -1) {
    return "sad ce lejla samo sto nije";
  }
  return ime.indexOf("lejla");
};

console.log(nalazenje(imena));

const noviNiz = new Set(imena); // set ne dozvoljava duplikat
console.log(noviNiz); // i vraca nam niz bez duplikata

