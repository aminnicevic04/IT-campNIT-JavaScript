// Zadatak 1
// napraviti funckiju grow koja kao argument privata niz brojeva
// pomnoziti sve brojeve i vratiti proizvod
arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const grow = function (arr1) {
  let racun = arr1.reduce((a, b) => a * b, 1); //1 inicijalna vrednost odakle pocinje
  return racun;
};
console.log(grow(arr1));

// Zadatak 2
str1 = "you will win";
const addLength = function (arr) {
  return arr.split(" ").map((e) => e + e[0].length);
};
console.log(addLength(str1));

// Zadatak 3
const setAlarm = function (zaposleni, odmor) {
  if (zaposleni === true && odmor === false) {
    return true;
  } else {
    return false;
  }
};
//test
console.log(setAlarm(true, true));
console.log(setAlarm(false, false));
console.log(setAlarm(false, true));
console.log(setAlarm(true, false));

// Zadatak 4
str2 = "trenutno sam u centru nit";
const spinSingleWord = function (arr) {
  return arr.length > 4 ? arr.split("").reverse().join("") : arr;
};
console.log(spinSingleWord(str2));

/*Scope - odredjuje pristupacnost, vidljivost promenjivih.
Java Script ima tri tipa 
-block scope (samo u bloku koda)
-function scope (samo unfkciji)
-global scope (global)*/
//let i const ne mozemo da pristupimo izvan bloka koda
//dok VAR moze da s epristupi izvan bloka koda
//sve sto je unutar funckije ne moze se pristupiti izvan

// Zadatak 5

let niz2 = ["hook bill", "african", "pilgrim", "crested"];
const zadatakNeki = function (arr) {
  let find = "african";
  return arr.filter((el) => el !== find);
};
console.log(zadatakNeki(niz2));

//za domaci odradi preko filtera i slice

const zadatakNeki1 = function (arr) {
  let niz1 = "african";
  return arr.indexOf(niz1).slice(0, niz1) + niz2.slice(niz1, niz.length);
};
console.log(zadatakNeki(niz2));
