// (function () {
//   console.log(1);

//   setTimeout(function () {
//     console.log(2);
//   }, 1000);

//   setTimeout(function () {
//     console.log(3);
//   }, 0);

//   console.log(4);
// })();

// GET - preuzimas
// POST - saljes
//  PUT - menjanje nekih podataka
// DELETE

// JSON.stringify - pretvaranje objekta u json pa u string, tj. uzima objekat i pretvara ga u string

// let str = JSON.stringify(nesto);
// console.log(str);
// console.log(typeof str);

// JSON.parse - pretvara json string u objekat, ne moze da pretvori obican str u obj

//promise

// tri stanja:
// nedefinisan odbijen ili izvrsen

// const promis = new Promise((resolve, raject) => {
//   // u argumentu ima callbacks
//   console.log("ispisi nesto");
// });

// console.log(promis); //nista se ne izvrsava

// promis.then();

// let p = new Promise((resolve, raject) => {
//   let a = 2;

//   if (a == 2) {
//     resolve("succes");
//   } else {
//     ("failed");
//   }
// });

// p.then((message) => {
//   console.log("this is in the then" + message);
// }).chatch((message) => {
//   console.log(`this is in the chatch ${message}`);
// });

function ispis(vrednost) {
  console.log(vrednost);
}
let osoba = new Promise((resolve, rejects) => {
  let godine = 17;

  if (godine < 18) {
    resolve("maloletan");
  } else {
    resolve(godine);
  }
});

osoba
  .then((value) => {
    ispis(value);
  })
  .catch((err) => {
    console.log(err);
  });

punol
  .then((value) => ispis(value))
  .catch((err) => {
    console.log(err);
  });

function wait() {
  return new Promise((resolve, rejects) => {
    setTimeout(() => {
      resolve("proslo je dve sekunde");
    }, 2000);
  });
}

wait().then((value) => {
  console.log(`koliko je proslo? ${value}`);
});

let rez = new Promise((resolve, rejects) => {
  let broj = 10;

  if (godine < 0) {
    resolve("negativan");
  } else {
    resolve("pozitivan");
  }
});

function isPositive(broj) {
  return new Promise((resolve, rejects) => {
    if (godine < 0) {
      resolve("negativan");
    } else {
      rejects("pozitivan");
    }
  });
}

isPositive(5)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });

isPositive(-5)
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err);
  });
