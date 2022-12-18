// Zadatak 1 
// Uneti dva broja i od veceg oduzeti manji i prikazati rezultat.

// a=Number(prompt("unesite prvi broj"))
// b=Number(prompt("unesite drugi broj"))
// razlika = 0;

// if(a>b){
//     razlika = a - b;
// }
// else{
//     razlika = b - a;
// }

// console.log(razlika)

//Zadatak 2
//Uneti tri broja i sortirati ih od njaveceg do najmanjeg

a = 15;
b = 13;
c = 10;

if(a>b && a>c){
    prvi = a;
    if(b>c){
        drugi = b;
        treci = c;
    } else{
        drugi = c;
        treci = b;
    }
} else if (b>a && b>c ){
    
    prvi=b;

    if(a>c){
        drugi= a;
        treci=c;
    }else{
     
        drugi=c;
        treci=a;
    }
} 

console.log(prvi, drugi, treci);

//Zadatak 3
//Uneti broj koji ce oznacavati temperaturu i prikazati odgovarajucu poruku
//temperatura < 0 ispisati "smrzavanje"
//temperatura 0-10 ispisati "Veoma hladno"
//temperatura 10-20 ispisati "hladno vreme"
//temperatura 20-30 ispisati "normalna temperatura"
//temperatura 30-40 ispisati "vruce"
// >=40 ispisati "Veoma vruce"

stepeni = Number(prompt("unesite koliko ima stepeni"));   

if (stepeni < 0 ){
    console.log("smrzavanje")
} else if (stepeni<10){
    console.log("veoma hladno")
} else if(stepeni < 20){
    console.log("hladno vreme")
}else if(stepeni <30 ){
    console.log("normalna temperatura")
} else{
    console.log("veoma vruce")
}

//Zadatak 4
//uneti duzine stranica trougla i proveriti da li je trougao jednakostranican, jednakokraki ili raznostranican

a=5;
b=10;
c=5;
if(a===b && a===c){
    console.log("ovo je jednakostranican trouga")
} else if ( a === b || b === c || a === c) {
    console.log("jednakokraki")
} else {
    console.log("raznostranican")
}

//Zadatak 5
//uneti broj od 1-12, procitati broj i ispisati koji je to mesec

mesec = Number(prompt("Unesite redni broj meseca"));

 console.log(typeof dan);

 if (mesec === 1) {
    console.log("januar");
 } else if (mesec === 2) {
    console.log("februar");
} else if (mesec === 3) {
   console.log("mart");
 } else if (mesec === 4) {
   console.log("april");
 } else if (mesec === 5) {
   console.log("maj");
 } else if (mesec === 6) {
   console.log("jun");
 } else if (mesec === 7) {
   console.log("jul");
 } else if (mesec === 8) {
    console.log("avgust");
  } else if (mesec === 9) {
    console.log("septembar");
  } else if (mesec === 10) {
    console.log("oktobar");
  } else if (mesec === 11) {
    console.log("novembar");
  } else if (mesec === 12) {
    console.log("decembar");
  } 
 
 else {
   console.log("Nije dobro unet broj");
 }