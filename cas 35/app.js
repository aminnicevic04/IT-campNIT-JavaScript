// const { METHODS } = require("http");

// const p = new Promise((resolve, raject) => {
//   let a = 2;
//   if (a === 2) {
//     resolve("tacno");
//   } else {
//     reject("netacno");
//   }
// });
// console.log(p); // ispisuje promise

// p.then((value) => {
//   // value je vrednost koju dobijamo iz promisa
//   console.log(value);
// }).catch((err) => {
//   console.log(err);
// });

// function isPositive(broj) {
//   return new Promise((reject, resolve) => {
//     if (broj > 0) {
//       resolve("broj je pozitivan");
//     } else {
//       reject("broj je negativan");
//     }
//   });
// }

// isPositive(5) //prosledjujemo arg fu-ji
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function mojaF() {
//   return "help";
// }
// mojaF().then((val) => {
//   console.log(val);
// });

// function nesto() {
//   return new Promise((resolve, raject) => {
//     resolve("hello");
//   });
// }
// // isto radi ko ovo gore sa async

// async function myDisplay() {
//   let myPromise = new Promise((resolve, raject) => {
//     resolve("ispisi mi nesto");
//   });

//   await myPromise.then((value) => {
//     console.log(value);
//   });
// }

// myDisplay();
// fetch("https://jsonplaceholder.typicode.com/todos/1") //metoda get nam sluzi za pruzimanje podataka sa servera
//   .then((response) => response.json)
//   .then((data) => console.log(data));

// const data = {
//   title: "Nova obaveza",
//   completed: false,
// };

// fetch("https://jsonplaceholder.typicode.com/todos", {
//   //sve nam je ovo promise
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-type": "application/json", //navodimo kojeg tipa su nam podaci
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// const dataPUT = {
//   id: 1,
//   title: "Nova obaveza",
//   completed: false,
// };

// fetch("https://jsonplaceholder.typicode.com/todos", {
//   method: "PUT",
//   body: JSON.stringify(dataPUT),
//   headers: {
//     "Content-type": "application/json",
//   },
// })
//   .then((response) => response, json())
//   .then((data) => console.log(data));

fetch("https://run.mocky.io/v3/7c38ba3b-bd1b-4896-92d8-43a42329238d")
  .then((response) => response.json()) //pozivamo json kao metodu
  .then((data) => console.log(data));

fetch("https://run.mocky.io/v3/7c38ba3b-bd1b-4896-92d8-43a42329238d", {
  method: "DELETE",
}).then((response) => console.log("odgovor sa statusom", response.status));

//sta su metode sta je body sta je headers?
