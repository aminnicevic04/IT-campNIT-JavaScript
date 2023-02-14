// asinhroni JS

//callback -
//promisa
//async / await

// callback vezbanje

// function saberi(a) {
//   return a + 2;
// }

// function vezba(array, callback) {
//     for(let i=0; i<array.length;i++){

//     }
// }

// function pomnozi(b) {
//   return b(5);
// }

// function kvadrat(n) {
//   return n * n;
// }

// function saberi(n) {
//   return n + 2;
// }

//Zadatak 1

function saberiDvaBroja(a, b) {
  return a + b;
}

function vezba1(callback) {
  return callback(5, 4);
}

console.log(vezba1(saberiDvaBroja));

const rezultat = vezba1(saberiDvaBroja); // moze i ovako
console.log(rezultat);

// zadatak 2

function test(a) {
  if (a % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function parniEl(callback, array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      newArr.push(array[i]);
    }
    continue;
  }
  return newArr;
}

const rez = parniEl(test, arr);

console.log(rez);
