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
//moze i za stringove i za nizove

//split() - string prebacuje u niz
const exampleSplit = "danas je drugi cas drugog ciklusa";
console.log(exampleSplit.split(" ")); //navodimo po cemu cemo da je odvojimo
//vraca svaku rec kao odvojeni string
//zbg toga sto kad god naidje na space on pocinje novi str
//radi smao na stringovima

//join() - niz prebacuje u string
const exampleJoin = ["a", "b", "c", "d"];
console.log(exampleJoin.join(" "));

//replace() - da zameni neki element sa nekim drugim
const exampleReplace = "ucimo u centru nit";
console.log(exampleReplace.replace("i", "e"));
//kad god naidej na b nek aga menja sa e
//ali menja samo prvo i na koje naidje

//replaceAll() - isto samo menja svaki element u koji trazimo
const exampleReplaceAll = "ucimo u centru nit";
console.log(exampleReplaceAll.replace("i", "e"));

//ma p() - vraca nam ceo niz, ali izmenjen funkcijom koja treba
const exampleMap = [10, 5, 6, 2, 4, 65, 1];
const newExampleMap = exampleMap.map(pomnozi);
// const newExampleMap = exampleMap.map((x) => x * 2);

function pomnozi(x) {
  return x * 2;
}
console.log(newExampleMap);

//podeli sa pet
const zadatak = [5, 10, 15, 20, 25, 30];
const noviZadatak = zadatak.map(podeli);

function podeli(x) {
  return x / 5;
}
console.log(noviZadatak);

//sort
const months = [1, 5, 2, 4];
months.sort();
console.log(months);
//ako stavimo stringove sortira ih po abecedi

//reverse() - cita ga od kraja ka pocetku
const array1 = ["one", "two", "three"];
console.log("array1:", array1);

//charAt() - da prikaze karakter na nekoj poziciji
let exampleCharAt = "nesto ne znam sta je";
console.log(exampleCharAt.charAt(2));

//filter()
let exampleFilter = [15, 5, 3, 5, 6, 7, 33];
// console.log(exampleFilter.filter((x) => x % 2 === 0));
// console.log(exampleFilter.filter(podeli));
//uzeo sam funkciju odozgo

//indexOf() - vraca nam index trazenog elementa
console.log(exampleFilter.indexOf(7));

//nadji najduzu rec u stringu domaci
