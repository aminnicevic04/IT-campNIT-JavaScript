//Zadatak 1
//Dat je niz i granicna vrednost. Proverite da li su 
//sve vrednosti u nizu ispod ili jednake granicnoj vrednosti.
//Ako jesu vratiti true. U suprotnom false.

niz = [10, 15, 150, 20, 45];
granicnaVrednost = 100;
g = true ;

for (i = 0; i<niz.length; i++){
    if(niz[i] > granicnaVrednost){
        g = false;
        break;
    }
    
    console.log(g);
}

// Zadatak 2

nasaRec = 'localization'

if(nasaRec.length < 10){
    console.log(nasaRec) ;
}else {
    console.log(nasaRec[0], nasaRec.length - 2 ,nasaRec[nasaRec.length - 1],)
}

// Zadatak 3

niz = [10,15,-5,6,-4,10,45,30,-20] ;
rezultat = [] ;
brojac = 0;
sumaNegativnih = 0 ;
for (i = 0; i<niz.length; i++){ 
    if (niz.length === 0){
        console.log('niz je prazan')
}else if (niz[i] > 0){
    brojac++ ;
} else {
    sumaNegativnih += niz[i] ;
}
}
rezultat.push (brojac);
rezultat.push (sumaNegativnih);
console.log(rezultat);

// Zadatak 4

a = 'amin' ;
b = 'nicevic' ;

if (a.length > b.length){
    console.log(b + a + b)
} else {
    console.log(a + b + a)
}





