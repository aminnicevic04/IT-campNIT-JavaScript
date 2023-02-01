//Zadtak 1 napravi funkciju koja vraca string u kojem je ime zamenjeno sa prezimenom

let imeIprezime = "Amin Nicevic";
const changing = function (str) {
  return str.split(" ").reverse().join;
};
console.log(changing(imeIprezime));
//split prebacujemo str u arr, reverse menjamo mesta, join preabcujemo opet u str

//Zadatak 2
//map,split,join

const input = "Every developer likes to mix kubernetes and javascript";

const zadatak = function (arr) {
  return arr
    .split(" ")
    .map((e) => (e.length > 4 ? e[0] + (e.length - 2) + e[e.length - 1] : e))
    .join(" ");
};
console.log(zadatak(input));

//Zadatak 3
// izdvoj namjamnje godine i najvece godine
// const input1 = [
//   {
//     name: john,
//     age: 13,
//   },
//   {
//     name: Amin,
//     age: 18,
//   },
//   {
//     name: Omer,
//     age: 65,
//   },
//   {
//     name: Amar,
//     age: 20,
//   },
// ];
// console.log(input1[0].age);
// let najvece = input1[0].age;
// let najmanje = input1[0].age;

// for (i = 0; i < input1.length; i++) {
//   if (input1[i].age < najmanje) {
//     najmanje = input1[i].age;
//   }

//   if (input1[i].age > najvece) {
//     najvece = input1[i].age;
//   }
// }
// console.log(najmanje, najvece);

// Zadatak 4
//napisati funkciju koja prihavta niz od 10 brojeva (izmedju 0-9)
//potrebno je da vrati niz tih brojeva u obliku telefonskog broja

function createPhoneNumber(niz) {
  let format = "(xxx) xxx-xxxx";

  for (let i = 0; i < niz.length; i++) {
    format = format.replace("x", niz[i]);
  }
  return format;
}
console.log(createPhoneNumber([0, 6, 3, 1, 6, 0, 1, 0, 0, 2]));
