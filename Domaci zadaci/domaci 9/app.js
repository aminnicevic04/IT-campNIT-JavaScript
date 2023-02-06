// Zadatak 1
// Dat je niz objekata koji predstvalja grupu ucenika, svaki sa imenom i nizom rezultata testa.
// izracunati prosecan rezultat testa za svakog ucenika, a zatim vratite niz objekata
// za ucenike koji imaju Avg rezultat iznad 90.

//map
//reduce
//filter

const students = [
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "David", scores: [100, 100, 90] },
];

const avgScores = students.map((student) => {
  return {
    name: student.name,
    avgScore:
      student.scores.reduce((sum, score) => sum + score, 0) /
      student.scores.length,
  };
});

const highAvgScore = avgScores.filter((student) => student.avgScore > 90);

console.log(highAvgScore);

//2
arr = [1, 1, 1, 1, 1];
const bla = function (arr) {
  return arr
    .map((x, a) => x + a)
    .filter((x) => x > 2)
    .join()
    .split(" ");
};
console.log(bla(arr));
