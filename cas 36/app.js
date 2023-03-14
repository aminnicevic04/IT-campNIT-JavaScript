// let naslov = document.querySelector("#naslov");

// naslov.style.color = "red";
// naslov.style.fontSize = "4rem";
// naslov.innerText = "promena";

// let naslovClass = document.getElementsByClassName("naslovv");

// let naslovByTag = document.getElementsByTagName("h1");
// //sve sto moze da se ponavlja smesta se kao lista

// let naslovByQuery = document.querySelector(".naslovv");
// //uzima samo prvi

// let naslovByQueryAll = document.querySelectorAll("naslovv");
// //uzima svaki element sa ovom klasom, tagom ili idem

// let lista = document.querySelectorAll(".list");
// for (let i = 0; i < lista.length; i++) {
//   lista[i].style.color = "green";
//   lista[i].style.fontSize = "4rem";
// }

// let dugme = document.querySelector("button");

// dugme.addEventListener("click", () => {
//   naslov.style.color = "purple";
// });

// dugme.addEventListener("mouseout", () => {
//   naslov.style.color = "yellow";
// });

// let lis = document.querySelector(".lis");

// let item1 = document.createElement("li");

// item1.innerText = "Item1";
// item1.style.color = "blue";
// item1.style.fontSize = "4rem";
// lis.appendChild(item1);

// let incr = document.querySelector(".increment");
// let decr = document.querySelector(".decrement");
// let broj = document.querySelector(".brojac");

// let brojac = 0;
// broj.innerHTML = brojac;

// incr.addEventListener("click", () => {
//   brojac++;
//   broj.innerHTML = brojac;
// });

// function decrement() {
//   brojac--;
//   broj.innerHTML = brojac;
// }

// localStorage.setItem("name", "Amin");
// let ime = localStorage.getItem("name");
// console.log(ime);

// localStorage.removeItem("name");

let inp = document.querySelector(".inp");
let btn = document.querySelector(".btn");

let card = document.querySelector(".card");

btn.addEventListener("click", () => {
  if (inp.value === "") {
    alert("unesite nesto.");
  } else {
    let h = document.createElement("h1");
    h.innerText = inp.value;
    card.appendChild(h);
    inp.value = "";
  }
});
