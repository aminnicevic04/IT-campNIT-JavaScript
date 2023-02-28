// CLOSURES

// let a = 5;

// function myFunc() {
//   let a = 4;
//   return a * a;
// }
// let couter = 0;

// function add() {
//   counter += 1;
// }

// add(); //1
// add(); //2
// add(); //3

// function pomnozi() {
//   counter *= 2;
// }

// let counter  = 0;

// function add(){
//     let counter = 0;
//     counter +=1;
// }

// add(); //1
// add(); //1
// add(); //1
// // uvek se resetuje brojac na nulu

function add() {
  let counter = 0;
  function plus() {
    counter += 1;
  }

  return plus;
}

let brojac = add();

brojac(); //1
brojac(); //2
brojac(); //3

let noviBrojac = add();
noviBrojac(); //1

// ugnjezdena funkcija vidi iza nje tj. samo vidi ono sto je deklarisano u parrent func a ne vidi ono sto je u global scope

// IIEF

// (function(){
//     counter = 0;
//     console.log(counter +=1;)
// })()

(function () {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})();

function izracunaj(x) {
  function pomnozi(y) {
    return x * y;
  }
  return pomnozi;
}

let rez = izracunaj(10);
rezultat(5); //ovde stavljamo argument za func pomnozi

// CHALLENGE 1
function createFunction() {
  return function () {
    console.log("nit");
  };
}

// /*** Uncomment these to check your work! ***/
const function1 = createFunction();
function1(); // => should console.log('hello');

// CHALLENGE 2
function createFunctionPrinter(input) {
  return function () {
    console.log(input);
  };
}

// /*** Uncomment these to check your work! ***/
const printSample = createFunctionPrinter("sample");
printSample(); // => should console.log('sample');
const printHello = createFunctionPrinter("hello");
printHello(); // => should console.log('hello');

// CHALLENGE 3
function outer() {
  let counter = 0; // this variable is outside incrementCounter's scope
  function incrementCounter() {
    counter++;
    console.log("counter", counter);
  }
  return incrementCounter;
}

const willCounter = outer();
const jasCounter = outer();

// Uncomment each of these lines one by one.
// Before your do, guess what will be logged from each function call.

// /*** Uncomment these to check your work! ***/
willCounter();
willCounter();
willCounter();

jasCounter();
willCounter();

function addByX(x) {
  function addbyTwo(y) {
    console.log(x + y);
  }
  return addbyTwo;
}

// /*** Uncomment these to check your work! ***/
const addByTwo = addByX(2);
addByTwo(1); // => should return 3
addByTwo(2); // => should return 4
addByTwo(3); // => should return 5

const addByThree = addByX(3);
addByThree(1); // => should return 4
addByThree(2); // => should return 5

const addByFour = addByX(4);
addByFour(4); // => should return 8
addByFour(5); // => should return 9

// CHALLENGE 4
function once(func) {
  let value;
  return function (y) {
    if (typeof value !== "undefined") {
      return value;
    }
    value = func(y);
    return value;
  };
}

// /*** Uncomment these to check your work! ***/
const onceFunc = once(addByTwo);
console.log(onceFunc(4)); // => should log 6
console.log(onceFunc(10)); // => should log 6
console.log(onceFunc(9001)); // => should log 6
