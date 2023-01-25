var student = {
  name: "amin",
  class: "IV",
};

let strKeys = Object.keys(student).join();
//join koristimo da pretvorimo niz u string
console.log(strKeys);

//napisi js fu-ju da nam vrati duzinu niza

function lengthObj(obj) {
  var duzina = Object.keys(obj);
  return duzina.length;
}
console.log(lengthObj(student));

//naci sumu svih pozitivnih brojeva u nizu

const arr = [1, 5, -5, 12, 5, -2, -4];

function calculating(arr) {
  const arr2 = arr.filter((x) => x > 0);
  let mnozenje1 = arr2.reduce((prethodno, trenutno) => prethodno + trenutno, 0);
  return `Zbir pozitivnih brojeva u nizu je ${mnozenje1}`;
}
console.log(calculating(arr));
