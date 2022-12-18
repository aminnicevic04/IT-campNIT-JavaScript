//Zadatak 1

// humanYears = Number(prompt('Unesite bvroj covekovih godina'));
// if (humanYears === 1){
//     console.log([1,15,15]);     //kad naidje na return zavrsava program i nista ispod nece da izvrsava
// }else if(humanYears === 2){
//     console.log([2, 15+9, 15+9]);
// }else{
//     console.log([humanYears, 15+9+(humanYears-2)*4, 15+9(humanYears-2)*5]);
// }

//Zadatak 2
//Palindrom = rec koja moze da se cita isto sa obe strane tipa ana
//Proveri da li rec palindrom

// str = 'anavolimilovana';
// isPalindrom = true;

// for (i=0;a i<str.length/2; i++) {
//     if(str[i] !== str[str.length - 1 - i]){ 
//     isPalindrom = false;
//     break;
//     }
// }
// if (isPalindrom) {
//     console.log('String je Palindrom');
// } else {
//     console.log('String nije Palindrom');
// }

//Zadatak 3
//Amstrongov broj je broj gde se svaka cifra kubira *3 i ako je zbir svega toga pocetni broj onda je amstrongov broj

broj = 371 ;

trecaCifra = broj%10 ; // 371/10 = 37, ostatak 1
drugaCifra = Math.floor(broj / 10) %10; // 371/10 = 37   37%10=7           
//% modul jesta ostatak pri deljenju   
//math.floor je samo zaokruzivanje broja
prvaCifra = Math.floor(broj / 100);

amstrongNumber = prvaCifra ** 3 + drugaCifra ** 3 + trecaCifra ** 3;

if(broj === amstrongNumber){
    console.log('Ovo je amstrongov broj');
} else {
    console.log('Ovo nije amstrongov broj');
}

//Zadatak 4
//Ispisati sve trocifrene  brojeve cija je suma prve dve cifre veca od trece cifre

// broj = 560 ;

// for(i=100; i<999; i++){
//     trecaCifra = i%10 ;
//     drugaCifra = Math.floor(i/ 10) %10;
//     prvaCifra = Math.floor(i / 100);
//  if (prvaCifra + drugaCifra > trecaCifra){
//  console.log('zbir prve dve cifre je veci nego druga cifra')
// }
// }

//Zadatak 5
//Ispisati  sve trocifrene brojeve cija je suma cifara jednaka broju X

x = 333; 

for(i=100; 1<1000; i++){
    trecaCifra = i%10 ;
    drugaCifra = Math.floor(i/ 10) %10;
    prvaCifra = Math.floor(i / 100);
 if (prvaCifra + drugaCifra + trecaCifra === x){
    console.log(i)
}
}
