let arrayNumber = [10, 15, 5, 7];

//pop() - uklanja poslednji element iz niza
console.log(arrayNumber.pop());

//push() - dodaje novi element na kraju niza
arrayNumber.push(20);
console.log(arrayNumber);

let str = "danas je drugi cas drugog ciklusa";

//toLowerCase()
//toUpperCase()

console.log(str.toLowerCase());
console.log(str.toUpperCase());

//concat() - omogucava nam da sastavimo dva niza ili stringa
let str1 = "hello";
let str2 = " Amci";

let newStr = str1.concat(str2);
console.log(newStr);

// let arr1 = [a, b, c, d];
// let arr2 = [e, f, g, h];

// let aaaa = arr1.concat(arr2);
// console.log(aaaa);

//trim() - da uklonimo space sa pocetka i kraja stringa
const exampleTrim = "      amci      ";
console.log(exampleTrim.trim());

//slice(start,end) - da uzmemo deo nekog niza odakle hocemo dokle hocemo
const exampleSlice = "hello world";
console.log(exampleSlice.slice(2, 11));
//uzima od 2 indexa do 8
//start vraca kraj ne vraca
console.log(exampleSlice.slice(2, -1));
//vraca od 2 indexa do -1 od pozadi
console.log(exampleSlice.slice(2, exampleSlice.length));
//vraca od drugog do kraja sa krajem

//substring - izdvaja karaktere i vraca kao novi niz
const exampleSubstring = "radi samo na stringovima";
console.log(exampleSubstring.substring(2, 10));

//unshift() - dodaje element na pocetku
const exampleUnShift = [5, 10, 15, 20];
exampleUnShift.unshift(50);
console.log(exampleUnShift);

//shift - uklanja element na pocetku
const exampleShift = [5, 10, 15, 20];
exampleShift.shift();
console.log(exampleShift);

//includes - proverava da li je element u nizu
const exampleIncludes = [15, 45, 50, 100];
console.log(exampleIncludes.includes(50));
