// n = 5;
// if(n%2 === 0){
//     console.log('broj je neparan');
// } else{
//     console('broj je paran');
// }

// uslov ? true : false; //ispituje se da li je uslov ispinjen
// str = n % 2 === 0 ? "paran" : "neparan"; //ovo radimo samo kada nam je manje ovih if else itd..

// console.log(str)

//ako je veca od 5 oduzmemo 5
//ako je manja dodamo 2

// n = 156 ;
// broj = n%10<5 ? (n+=2) : (n-=5) ;
// //prvo if drugo else
// console.log(broj) ;

//nadji prestupne godine
//broj godine je deljiv sa 4, ali nije deljiv sa 100,
//broj godine je deljiv sa 100 i sa 400

// let start = 1000;
// let end = 2000;

// for( let i = start; i < end; i++){
//     if(i % 4 === 0 && i % 100 !== 0){
//         console.log('godina je prestupna' , i);
//     } else if (i%100 ===0 && i%400===0){
//         console.log('godina je prestupna' ,i)
//     } else {
//         continue;
//     }
// }

//sortiraj projeve iz niza od najmanjeg do najveceg bez .sort

// niz = [4,2,5,6,3,10,1];

// for(i = 0; i<niz.length; i++){
//     for(j=i+1; j<niz.length; j++){
//         if(niz[i] > niz[j]){
//             let pom = niz[i];
//             niz[i] = niz[j];
//             niz[j] = pom;
//         }
//     }
// }
// console.log(niz)

// iz unetog stringa treba izdvojiti N znakova sa leve strane
//npr. za string 'pera ima devojku' vracamo samo 'pera ima'
//ako je N vece od duzine stringa, kao rezultat se dobija ceo string

string = "Pera ima devojku";
n = 8;
novistr = "";

for (i = 0; i < n; i++) {
  novistr += string[i];
  if (n > string.length) {
    novistr = string;
    break;
  }
}
if (n > string.length) {
  n = string.length;
}
console.log(novistr);

//const znaci da je konstanta i ne mozemo da je menjamo
//var vazi za ceo kod a let samo za odredjeni blok koda
