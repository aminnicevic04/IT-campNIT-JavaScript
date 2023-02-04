// Zadatak1

// for (i = 0; i < 100; i++) {
//   if (i % 5 === 0 && i % 3 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 5 === 0) {
//     console.log("buzz");
//   } else if (i % 3 === 0) {
//     console.log("fizz");
//   }
// }

// Zadatak 2

str = "kalkulator";
const isPalindrom = function (str) {
  str1 = str.split("").reverse().join("");
  let uslov = str === str1 ? `${str} je palindrom` : `${str} nije palindrom`;
  return uslov;
};
console.log(isPalindrom(str));

//Zadatak 3

// var ucenik = {
//   name: "Amin",
//   surname: "Nicevic",
//   godiste: 2004,
// };
// console.log(ucenik.name);
// delete ucenik.surname;
// ucenik.godiste = 2005;
// console.log(Object.values(ucenik));
