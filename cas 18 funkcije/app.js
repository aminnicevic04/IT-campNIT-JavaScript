// function nazivFunkcije() {
//   console.log("ispisi nesto");
// }
// nazivFunkcije();

// function saberi(firstNum, secondNum) {
//   return firstNum + secondNum;
// }
// console.log(saberi(1, 10));

// function niz(arr) {
//   for (let i = 0; i < arr.length; i++);
//   console.log(arr[i]);
// }
// const array = [10, 15, 3, 12, 4, 5];
// console.log(array);

// const saberiDvaBroja = (first, second) => first + second;
// console.log(saberiDvaBroja(10, 5));

//kvadriraj sve brojeve

// const kvadriranje = (num) => {
//   return console.log(num ** 2);
// };
// kvadriranje(10);

// const arr = [10, 5, 6, 2, 4, 65, 1];
// // const kvadrant = arr.map(kvadriranje);
// const niz123 = arr.map((x) => x ** 2);
// console.log(niz123);

//izdvoj elemente koji su veci od 10
// let niz1 = [10, 5, 3, 2, 1, 5, 7, 88, 76, 54, 123];
// console.log(niz1.filter((x) => x > 10));

//IZDVOJ IZ NIZA JEDINSTEVENI UNIKAT
// let arr = [1, 1, 4, 5, 6, 5, 5, 4, 8, 9, 0, 87, 1];
// uniqueArr = [];

// function uniqueArray(arr) {
//   for (i = 0; i < arr.length; i++) {
//     if (uniqueArr.includes(arr[i])) {
//       continue;
//     } else {
//       uniqueArr.push(arr[i]);
//     }
//   }
//   return uniqueArr;
// }

// console.log(uniqueArray(arr));

//zadatak

function uniqueInOrder(arr) {
  const arrtwo = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      continue;
    }
    arrtwo.push(arr[i]);
  }
  return arrtwo;
}

const arrn = "aaaabbbbcccdddagggeee";

// console.log(uniqueInOrder(arrn));
