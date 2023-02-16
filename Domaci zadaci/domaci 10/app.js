// Zadatak 1
//Construct a function intersection that takes in an array of arrays,
//compares the inner arrays, and returns a new array with elements
//found in all of them. BONUS: Use reduce!

function intersection(arrays) {
  let newArr = arrays[0].slice();
  for (let i = 0; i < arrays.length; i++) {
    newArr = newArr.filter((el) => arrays[i].includes(el));
  }
  return newArr;
}

console.log(
  intersection([
    [5, 10, 15, 20],
    [15, 88, 1, 5, 7],
    [1, 10, 15, 5, 20],
  ])
);
// should log: [5, 15]
