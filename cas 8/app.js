//Zadatak1
// str = prompt("unesite neki tekst");
// if (str.lenght === 0) {
//   console.log(prazno);
// } else {
//     console.log("duzina stringa je",str.length);
// }

//Zadatak2 mala u velika, velika u mala

// rec = "aAmmASdD";
// noviString= ""; //ovo je novi string koji se ispisuje posle promene slova
// for(i=0; i<rec.length; i++){ //koristimo for zbog toga sto moramo sbvaki string da proverimo
//     if(rec[i]===rec[i.toUpperCase()]){
//         noviString += rec[i].toLoweCase();
//     } else {
//         noviString += rec[i].toUpperCase()
//     }
// }
// console.log(noviString);

// cars = ["BMW", "Audi", "Mercedes"]; //marke automobila su elementi u nizu
// console.log(cars[0]);
// console.log(cars[2]);
// console.log(cars.length);

// cars.push("Golf"); //dodavanje elementa u nizu
// console.log(cars);

// cars.pop(); //sklanja poslednji element iz niza
// console.log(cars);

// for(i=0; i<cars.length; i++){
//     console.log(cars[i]);
// }


//Zadatak3 napravi niz isto automobili ali od pozadi
// cars = ["BMW", "Audi", "Mercedes", "Ferrari", "Porshce",];
// for(i = cars.length-1; i>=0 ;i--){
//     console.log(cars[i]); //ovo od i znaci da ga stampa od tog elementa sto smo naveli tj. od pozadi jer smo stavili i = od pozadi da ide tj. da je zadnji element
// }

//Zadtak4 isto ovo samo da se ceo niz ispise
// newCars = [];
// for(i = cars.length-1; i>=0; i--){
//     newCars.push(cars[i]);
// }
// console.log(newCars);

//Zadatak 5 pronaci najmanji i najveci element niza

// brojevi = [10,15,9,5,6,7,17,1];
// max = brojevi[0];
// min = brojevi[0];
// for(i=0;i<brojevi.length;i++){
//     if(brojevi[i]>max){
//         max = brojevi[i];
//     }
// }

// brojevi = [10,15,9,5,6,7,17,1];
// max = brojevi[0];
// min = brojevi[0];
// for(i=0;i<brojevi.length;i++){
//     if(brojevi[i]<min){
//         min = brojevi[i];
//     }
// }
// console.log(max)

//Zadatak6 ispisi sve parne brojeve 
brojevi = [10,15,9,5,6,7,17,1];
parni = []
neparni = []
for(i=0 ; i<=brojevi.length; i++){
    if(brojevi [i] % 2 === 0 ){ 
    parni.push(brojevi[i]);
} else {    
    neparni.push(brojevi[i]);
}
}
console.log(parni);
console.log(neparni);
