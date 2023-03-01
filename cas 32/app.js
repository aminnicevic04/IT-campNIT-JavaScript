// CHALLENGE 5
function after(count, func) {
  let counter = 0;
  return function () {
    counter++;
    if (counter === count) {
      func();
    }
  };
}

// /*** Uncomment these to check your work! ***/
const called = function () {
  console.log("hello");
};
const afterCalled = after(3, called);
afterCalled(); // => nothing is printed
afterCalled(); // => nothing is printed
afterCalled(); // => 'hello' is printed/

// CHALLENGE 6
function delay(func, wait) {
  return function () {
    setTimeout(() => func(), wait);
  };
}

const nova = delay(() => {
  console.log("nit");
}, 5000);
// nova()
// CHALLENGE 7
function rollCall(names) {
  let counter = 0;
  return function () {
    if (counter >= names.length) {
      console.log("Everyone accounted for");
    } else {
      console.log(names[counter]);
      counter++;
    }
  };
}

// /*** Uncomment these to check your work! ***/
const rollCaller = rollCall(["Victoria", "Juan", "Ruth"]);
rollCaller(); // => should log 'Victoria'
rollCaller(); // => should log 'Juan'
rollCaller(); // => should log 'Ruth'
rollCaller(); // => should log 'Everyone accounted for'

// CHALLENGE 8
function saveOutput(func, magicWord) {
  let obj = {};
  return function (x) {
    if (x === magicWord) {
      return obj;
    } else {
      obj[x] = func(x);
      return func(x);
    }
  };
}

// /*** Uncomment these to check your work! ***/
const multiplyBy2 = function (num) {
  return num * 2;
};
const multBy2AndLog = saveOutput(multiplyBy2, "boo");
console.log(multBy2AndLog(2)); // => should log 4
console.log(multBy2AndLog(9)); // => should log 18
console.log(multBy2AndLog("boo")); // => should log { 2: 4, 9: 18 }

// CHALLENGE 9
function cycleIterator(array) {
  let counter = 0;
  return function () {
    if (counter >= array.length) {
      counter = 0;
    }
    let amil = array[counter];
    counter++;
    return amil;
  };
}

// /*** Uncomment these to check your work! ***/
const threeDayWeekend = ["Fri", "Sat", "Sun"];
const getDay = cycleIterator(threeDayWeekend);
console.log(getDay()); // => should log 'Fri'
console.log(getDay()); // => should log 'Sat'
console.log(getDay()); // => should log 'Sun'
console.log(getDay()); // => should log 'Fri'
