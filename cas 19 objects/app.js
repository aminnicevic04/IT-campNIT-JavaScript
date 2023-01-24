"use strict";

const osoba = {
  prezime: "Mujanovic", //ime je key
  ime: "Hasan",
};

function punoImeIPrezime(ime, prezime) {
  return ime + " " + prezime;
}

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
console.log(Object.values(auto));

// console.log(typeof null) je object
