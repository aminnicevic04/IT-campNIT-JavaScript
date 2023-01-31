// Kreirati funkciju findMissingLetter koja kao argument dobija niz.
// Potrebno je pronaci koje slovo je propusteno u nizu
// npr. arr = ['A','B','C','D','F'] ==> E

let arr1 = ["B", "C", "D", "E", "G"];
let arr2 = ["A", "B", "C", "D", "E", "F", "G", "H"];
findMissingLetter = function (arr) {
  const prviIndeks = arr2.indexOf(arr[0]);
  const sliceNiz = arr2.slice(prviIndeks);
  for (i = 0; i <= arr.length; i++) {
    if (sliceNiz[i] !== arr[i]) return sliceNiz[i];
  }
};
console.log(findMissingLetter(arr1));
