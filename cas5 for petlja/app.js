//Zadatak 1
for(i = 0; i < 5; i++){
    console.log(1);
}

//Zadatak 2
//ispisi brojeve od 1-10 unazad
for(i=10; i>0; i--){
    console.log(i);
}

//Zadatak 3
for(i=0; i<=10; i++){
    console.log(i); 
}

//Zadatak 4 
//Naci sumu prvih 10 prirodnih brojeva
suma=0; 
for(i=1;i<=10;i++){
    suma += i;
}
console.log(suma)

//Zadatak5
proizvod=1
// debugger;
for(i=1; i<=5; i++){
proizvod *=i
}
console.log(proizvod)

//Zadatak 6 
//uneti broj n i saberi sumu od n-1 n?
n=20
suma=0;
for(i=0; i<=n; i++){
   suma += i;
}
console.log(i)

//Zadatak 7 
//uneti deset brojeva i iyracunati sumu i avg vrednost
sumu=0;
prosek=0;
n=Number(prompt("uneti broj n1"))
for(i=0; i<10; i++){
    n=Number(prompt("uneti broj n" , i))
    sumu+=n;
    prosek = sumu/10;
}
console.log(sumu)

//Zadatak 8 
//unesi na kub broj n u pet primera (prompt).
for(i=0;i<5;i++){
    broj=Number(prompt("unesi broj"));
    console.log(broj ** 3)
}

//Zadatak 9
//napisi tablicu mnozenja od 1-10 za neki broj.
n=Number(prompt("unesite broj"));
for(i=1; 1<=10; i++){
    console.log(n,"*", i, "-->", n*i);
}

//Zadatak 10
//napravi pattern od zvezdica u obliku jelke.
zvezdice="";
for(i=0;i<5; i++){
    zvezdice += "*";
    console.log(zvezdice);
}