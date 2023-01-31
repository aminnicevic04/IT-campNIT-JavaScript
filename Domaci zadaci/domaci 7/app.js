// Zadatak 1
const nizBrojeva = [1, 2, 3, 4, 5, 6];

function pivot(arr) {
  let sumaSaLeve = 0;
  let sumaSaDesne = 0;
  for (let i = 0; i < arr.length / 2; i++) {
    sumaSaLeve += arr[i];
    sumaSaDesne += arr[arr.length - 1 - i];
  }

  if (sumaSaLeve === sumaSaDesne) {
    return "niz je pivot";
  }

  return "niz nije pivot";
}

console.log(pivot(nizBrojeva));
