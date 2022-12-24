// 1
// Write a JavaScript for loop that will iterate from 0 to 15.
// For each iteration, it will check if the current number is odd or even,
// and display a message to the screen.

// for(i = 0; i<=15; i++){
//     if(i %2 === 0){
//         console.log(i, 'broj je paran')
//     } else {
//         console.log(i, 'broj je neparan')
//     }
// }

// 2
// write all the numbers that are divisible by 3 and 5 up to 1000.

// for(i=0; i<=1000;i++){
//     if(i % 3 === 0 && i % 5 === 0)   {
//         console.log(i + 'broj je deljiv sa 5 i 3')
//     }
// }

// 3
//Write the javaScript statement that assigns 1 to x if y is greater than 0

// x = prompt('unesite broj x');
// y = prompt('unesite broj y');

// if (isNaN (x) || isNaN(y)){
//     console.log('niste unesi broj')
// } else if (y>0){
//     x++;    
//     console.log(x)
// }
// else{
//     console.log(x)
// }

// 4
//Write the double value of natural numbers from 10 to 6 backwards.
// brojevi = 0;
// for(i=10;i>6;i--){
//     brojevi = i*2;
//     console.log(brojevi)
// }

// 5
//the sum of the double value of the first 5 numbers
// broj=0;
// for(i=0;i<=5;i++){
//     broj = i*2;
//     console.log(broj)
// }

// 6
// suma parnih brojeva od k do n

let broj1g = +prompt("Unesite prvi broj");
let broj2g = +prompt("Unesite drugi broj");
let sumag = 0;

if (isNaN(broj1g) || isNaN(broj2g)) {
  console.log("Niste uneli broj");
} else if (broj1g < broj2g) {
  for (broj1g; broj1g <= broj2g; broj1g++) {
    if (broj1g % 2 === 0) {
      sumag += broj1g;
    }
  }
} else if (broj1g > broj2g) {
  for (broj2g; broj2g <= broj1g; broj2g++) {
    if (broj2g % 2 === 0) {
      sumag += broj2g;
    }
  }
} else if (broj1g == broj2g) {
  console.log("Uneli ste iste brojeve");
}

console.log(sumag);


