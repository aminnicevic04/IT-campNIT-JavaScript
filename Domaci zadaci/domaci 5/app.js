// Dati niz s koji se sastoji od rijeci i razmaka,
// vratite duzinu poslednje reci u nizu

let niz = "Amin laptop ime lenovo thinkpad";

let duzinaPoslednjeReci = 0;
let poslednjiRazmak = -1;

for (let i = 0; i < niz.length; i++) {
  if (niz[i] == " ") {
    poslednjiRazmak = i;
  }
}
if (poslednjiRazmak >= 0) {
  duzinaPoslednjeReci = niz.length - poslednjiRazmak - 1;
}
console.log(duzinaPoslednjeReci);
