// challenges 7
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

// challenges 8

function concatTwoArrays(array1,array2){
    let newArray = array1;
    
    for(let i=0; i<array2.length; i++){
      if(!array1.includes(array2[i])){
        newArray.push(array2[i])
      }
    }
    return newArray
  }
  // Challenge 8
  function union(arrays) {
      return reduce(arrays, concatTwoArrays)
  }
  
  console.log(union([[5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]]));
  // should log: [5, 10, 15, 88, 1, 7, 100]
  
  
  // Challenge 9
  function objOfMatches(array1, array2, callback) {
    const obj = {};
      for(let i = 0; i<array1.length; i++){
      if(callback(array1[i])=== array2[i]){
        obj[array1[i]] = array2[i]
      }
    }
    return obj;
  }
  
  console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
  // should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }
  
  
  // Challenge 10
  function multiMap(arrVals, arrCallbacks) {
          const obj1 = {};
        let niz = [];
    for(let i = 0; i<arrVals.length; i++){
      
      for(let j = 0; j<arrCallbacks;j++){
        niz.push(arrCalbacks[j](arrVals[i]))
      }
      obj1[arrVals[i]] = niz;
    }
    return obj1;
  }
  
  console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
  // should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
  
  
  // Challenge 11
  function objectFilter(obj, callback) {
      forIn(let el in obj){
      
      if(obj[el] === callback(obj[el])){
        newObj[el] = obj[el];
      }
    }
    return newObj;
  }
  
  const cities = {
  London: 'LONDON',
  LA: 'Los Angeles',
  Paris: 'PARIS',
  };
  console.log(objectFilter(cities, city => city.toUpperCase()))