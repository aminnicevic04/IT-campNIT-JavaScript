// // fetch("https://api.example.com/data")
// //   .then((response) => response.json())
// //   .then((data) => console.log(data))
// //   .catch((error) => console.error(error));

// // fetch("https://api.example.com/data", {
// //   method: "POST",
// //   body: JSON.stringify(data),
// //   headers: {
// //     "Content-Type": "application/json",
// //   },
// // });

// console.log("amci");

// fetch("https://reqres.in/api/users")
//   .then((response) => {
//     if (response.ok) {
//       console.log("uspesno");
//     } else {
//       console.log("neuspesno");
//     }
//   })
//   .then((data) => console.log(data));

// fetch("https://reqres.in/api/users")
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error"));

// fetch("https://reqres.in/api/users", {
//   method: "POST",
//   headers: {
//     "Content-Type": "aplication/json",
//   },
//   body: JSON.stringify({
//     name: "User 1",
//   }),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data))
//   .catch((error) => console.log("error"));

// // novo

// // async/await olaksava pisanje promisa

// // async cini da funckija vrati promis
// // await cini funkciju cekanjem na obecanje
// // kljucna rec async ispred funckije cini da funkcija vrati promis

// async function myFunction() {
//   return "Hello";
// }

// // Isto je kao

// function myFunction() {
//   return Promise.resolve("Hello");
// }
// // Primer:
// // async function myFunction() {
// //   return "Hello";
// // }

// // myFunction
// //   .then((result) => {
// //     console.log(result);
// //   })
// //   .catch((err) => {
// //     console.log(err);
// //   });

// // Await se moze koristiti samo unutar async funckije
// // Await sluzi da funkcija pauzira izvrsavanje i ceka na reseno obecanje pre nego sto nastavi

// async function myDisplay() {
//   let myPromise = new Promise((resolve, reject) => {
//     resolve("Ispisi mi nesto");
//   });

//   await myPromise.then((v) => {
//     console.log(v);
//   });
// }

// myDisplay();

// // fetch() pokrece proces preuzimanja resursa sa servera.
// // Metoda fetch vraca Promise koje se resava u Response objekat
// const fetch = require("node-fetch");

// // let fetchRes = fetch("https://jsonplaceholder.typicode.com/todos/1", {
// //   method: "GET",
// // });

// // fetchRes
// //   .then((res) => res.json())
// //   .then((d) => {
// //     console.log(d);
// //   });

// // async function getData() {
// //   const response = await fetch("http://localhost:8080/api/test/products");

// //   console.log(response);
// //   const data = await response.json();
// //   console.log(data);
// // }

// // getData();

// // async function fetchUserData(userId) {
// //   const response = await fetch(
// //     `https://jsonplaceholder.typicode.com/users/${userId}`
// //   );
// //   const user = await response.json();
// //   return user;
// // }

// // async function main() {
// //   console.log("Pozivam API za korisnika sa ID-jem 1...");
// //   const user = await fetchUserData(1);
// //   console.log("Korisnik sa ID-jem 1 je:", user);
// // }

// // main();
// //FETCH GET

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// //FETCH POST

// const data = {
//   title: "Nova obaveza",
//   completed: false,
// };

// fetch("https://jsonplaceholder.typicode.com/todos", {
//   method: "POST",
//   body: JSON.stringify(data),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// //FETCH PUT
// const dataPUT = {
//   id: 1,
//   title: "Izmenjena obaveza",
//   completed: true,
// };

// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "PUT",
//   body: JSON.stringify(dataPUT),
//   headers: {
//     "Content-Type": "application/json",
//   },
// })
//   .then((response) => response.json())
//   .then((response) => {
//     console.log(response.status);
//   })
//   .then((data) => console.log(data));

// //FETCH DELETE
// fetch("https://jsonplaceholder.typicode.com/todos/1", {
//   method: "DELETE",
// }).then((response) => console.log("Odgovor sa statusom:", response.status));

// //TRY...CATCH

// async function fetchData(url) {
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`HTTP greška! Status kod: ${response.status}`);
//     }
//     const data = await response.json();
//     return data;
//   } catch (error) {
//     console.error(error);
//   }
// }
// console.log("nesto");
// (async () => {
//   const url = "https://jsonplaceholder.typicode.com/todos/1";
//   const data = await fetchData(url);
//   console.log(data);
// })();

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("succes");
  } else {
    reject("failed");
  }
});

p.then((message) => {
  console.log("this is in the then " + message);
}).catch((message) => {
  console.log("this is in the catch" + message);
});
// then je kada uspe
// catch kada ne uspe
