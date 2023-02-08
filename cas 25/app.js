// const person = {
//   firstName: "anes",
//   lastName: "sarukic",
//   age: 20,
//   fullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person.fullName());

// // Object.freeze(pereson)
// // ne mozemo da menjamo nas objekat
// // ne mozemo da dodajemo, brisemo ili menjamo

// // Object.seal(person);
// // person.firstName = "Amin";
// // console.log(person);
// // console.log(person); // ne mozemo dodati vrednost
// // person.height = 183;

// // Zadatak 1
// // Unutar postojeceg objekta dodati nova svojstva:
// // 1. trenutnaBrzina: 0,
// // 2. maksimalnaBrzina: 260,
// // 3. povecanjeBrzine: (metoda koja uzima jedan argument),
// // 4. smanjenjeBrzine: (metoda koja uzima jedan argument),
// // 5. koci: (metoda koja dodeljuje 0 za vrednost trenutne brzine).

// const myCar = {
//   id: 1,
//   marka: "Audi",
//   model: "a4",
//   boja: "Crvena",
//   pogon: "prednji",
//   menjac: "automatski",
//   kontakt: [0622222, 02033322],
//   servis: {
//     datum: "04,maj",
//     km: 23000,
//     serviser: "Pasovic",
//   },
//   udaran: true,
// };

// myCar.trenutnaBrzina = 0;
// myCar.maksimalnaBrzina = 260;
// myCar.povecanjeBrzine = function (ubrzanje) {
//   if (this.trenutnaBrzina + ubrzanje > this.maksimalnaBrzina) {
//     return `nije moguce povecati brzinu toliko`;
//   } else {
//     this.trenutnaBrzina += ubrzanje;
//   }
// };
// myCar.povecanjeBrzine(100);

// myCar.smanjenjeBrzine = function (smanjenje) {
//   if (this.trenutnaBrzina - smanjenje < 0) {
//     return `nije moguce`;
//   } else {
//     this.trenutnaBrzina -= smanjenje;
//   }
// };

// myCar.koci = function () {
//   this.trenutnaBrzina = 0;
// };

// console.log(myCar);
// console.log(myCar.povecanjeBrzine(100));
// console.log(myCar.smanjenjeBrzine(30));

// console.log(myCar.trenutnaBrzina);
// myCar.koci();
// console.log(myCar.trenutnaBrzina);

// Zadatak 2
let person = {
  firstName: "amin",
  lastName: "nicevic",
  lenguage: "bosnian",
  // setLenguage: this.lenguage = 'english',
  // setNickName: firstName.slice(0,2) + lastName.slice(0,2),
  setLenguage: function (newLeng) {
    this.lenguage = newLeng;
  },
  setNickName: function () {
    return `${this.firstName[0].toUpperCase()}${this.firstName[1].toLowerCase()}${this.lastName[0].toLowerCase()}${this.lastName[1].toLowerCase()}`;
  },
};

console.log(person);
console.log(person.setNickName());
