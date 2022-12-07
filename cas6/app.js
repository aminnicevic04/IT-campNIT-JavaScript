//Zadatak 1
//FizzBuzz 1--100
//ako je broj deljiv sa 3 ispisati Fizz
//ako je broj deljiv sa 5 ispisati Buzz
//ako je broj deljiv i sa 3 i sa 5 ispisati FizzBuzz

// for(i=1; i<=100; i++) {
//     if(i%3===0 && i%5===0){
//         console.log("FizzBuzz");
//     }
//     else if(i%3===0){
//         console.log("Fizz");
//     }
//     else if(i%5===0){ 
//     console.log("Buzz");
//     }
//     else{
//         console.log(i)
//     }
// }

//Zadatak 2 
//Ispisi brojeve od 1-10 bez da napises broj 5

// for(i=1; i<=10; i++){
//     if(i!=5) { 
//     console.log(i)
//     }
// }

//break - zavrsava for petlju i izlazi iz nje
//continue - nastavlja petlju

//Zadatak 3
//Saberi sve parne brojeve 1-100

//nacin 1
// suma=0;
// for(i=10; 1<=100; i+=2) {
//     suma+=i;
// }
// console.log(suma);

// //nacin 2
// suma=0;
// for(i=1;i <= 100; i++){
//     if (i%2===1){
//         continue;
//     }
//     suma+=i;
// }

//Zadatak 4 
//Odredi faktorijel broja 5
n=5;
proizvod=1;
for(i=1; i<=n; i++){
    proizvod *= i;
}
console.log(proizvod);
