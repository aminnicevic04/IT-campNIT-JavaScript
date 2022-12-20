//Zadatak 1
//Naci sve delitelje prirodnog broja X

// x = prompt('Unesite broj X.') ;
// for (i = 1 ; i<=x ; i++) {
//     if (x % i === 0) {
//         console.log(i)
//     }
// }

//Zadatak 2

word = 'programiranje';
isIsogram = true;

if(word.length === 0){
    console.log("Nas string je izogram");
    return; //zavrasava ceo program
}

for(i = 0; i<word.strength; i++){
    for(j=i+1; j<word.length; j++){
        if(word[i] === word[j]){
            isisogram = false;
            break; //zavrsava petlju
        }
    }
}

if(isIsogram){
    console.log('string nije izogram');
}