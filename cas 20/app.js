// var student = {
//   name: "amin",
//   class: "IV",
// };

// let strKeys = Object.keys(student).join();
// //join koristimo da pretvorimo niz u string
// console.log(strKeys);

// //napisi js fu-ju da nam vrati duzinu niza

// function lengthObj(obj) {
//   var duzina = Object.keys(obj);
//   return duzina.length;
// }
// console.log(lengthObj(student));

// //naci sumu svih pozitivnih brojeva u nizu
// const arr = [1, 5, -5, 12, 5, -2, -4];

// function calculating(arr) {
//   const arr2 = arr.filter((x) => x > 0);
//   let mnozenje1 = arr2.reduce((prethodno, trenutno) => prethodno + trenutno, 0);
//   return `Zbir pozitivnih brojeva u nizu je ${mnozenje1}`;
// }
// console.log(calculating(arr));

// //uneti string kao puno ime i prezime prebaci u string,
// //izdvoj inicijale, i vrati ponovo u string i ispisi u koznoli.
// var string = "Amin Nicevic";
// function inic(str) {
//   return str
//     .split(" ")
//     .map((el) => el[0])
//     .join(" ");
// }
// console.log(inic(string));

// //svako pocetno slovo niza napisati velikim slovom
// // let nizImena = ["lejla", "Ahmed", "AMIN", "Amin"];
// // function capitalizeName(arr) {
// //   return str
// //     .map((el) => el[0].toUpperCase())
// //     .slice(1, el.length)
// //     .toLowerCase();
// // }
// // console.log(capitalizeName(nizImena));

// var bibl = [
//   {
//     author: "Bill Gates",
//     title: "The road ahed",
//     readingStatus: true,
//   },
//   {
//     author: "Steve Jobs",
//     title: "Walter Isacson",
//     readingStatus: true,
//   },
//   {
//     author: "Suzzane Collins",
//     title: "Mockingjay",
//     readingStatus: false,
//   },
// ];

// for (i = 0; i < bibl.length; i++) {
//   if (bibl[i].readingStatus) {
//     console.log(`vec procitano ${bibl[i].title} od autora ${bibl[i].author}`);
//   } else {
//     console.log(`morate citati ${bibl[i].title} od autora ${bibl[i].author}`);
//   }
// }

// ispisivanje for petlje

niz = [10, 5, 2, 5, 6, 7];
for (let i = 0; i < niz.length; i++) {} //klasicna for petlja

for (let element in niz) {
}
console.log(element); //ispisuje nam samo indexe

for (let element of niz) {
}
console.log(element); //ispisuje se vrednost

console.log(niz.forEach((el) => el * 2));
//uzima svaki elemnt i radi ono sto mu zadamo u ovom slucaju mnozi ga sa dva
