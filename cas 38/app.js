let glavni = document.querySelector(".container");

async function getAllUser() {
  let data = await fetch("https://jsonplaceholder.typicode.com/users");

  let response = data.json();
  return response;
}
let podaciKorisnika;
getAllUser().then((d) => {
  podaciKorisnika = d;

  podaciKorisnika.forEach((element) => {
    let card = document.createElement("div");
    card.className = "card";

    var usericon = document.createElement("img");
    usericon.setAttribute("src", "icon.png");

    let ime = document.createElement("p");
    ime.innerText = "Name: " + element.name;

    let username = document.createElement("p");
    username.innerText = "Username: " + element.username;

    let email = document.createElement("p");
    email.innerText = "E-mail: " + element.email;

    card.addEventListener("click", () => {
      window.location.href = `index1.html?id=${element.id}`;
    });

    card.appendChild(usericon);
    card.appendChild(ime);
    card.appendChild(username);
    card.appendChild(email);

    glavni.appendChild(card);
  });

  console.log(podaciKorisnika);
});
