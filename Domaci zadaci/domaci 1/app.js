//Zadatak 1 Izracunati rosecnu vrednost niza, 
//ali da izostavite najveci i najmanji element.

niz = [10, 5, 17, 2, 6, 9, 14];
min = niz[0];
max = niz[0];
suma = 0;
for (i = 0; i < niz.length; i++) {
  if (niz[i] > max) {
    max = niz[i];
  }

  if (niz[i] < min) {
    min = niz[i];
  }

  suma += niz[i];
}

prosek = (suma - min - max) / (niz.length - 2);

console.log("prosek je ", prosek);
