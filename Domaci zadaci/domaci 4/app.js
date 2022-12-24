//izdvoj jedinstvene elemente

niz = [10,15,2,3,45,10,2,3];
const newArray = [];
let isUnique = true;

for(let i = 0; i<niz.length; i++){
    isUnique = true;
    for(let j=i+1; j<niz.length; j++){
        if(niz[i]===niz[j]){
            niz[j] = "";
            isUnique = false;
            break;
        }
    }

    if(isUnique && niz[i] !== ""){
        newArray.push(niz[i]);
    } else{
        continue;
    }
}

console.log(newArray);