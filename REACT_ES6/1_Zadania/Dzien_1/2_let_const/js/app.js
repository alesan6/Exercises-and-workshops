addEventListener('DOMContentLoaded', function(){

    const PI = 3.14;
    let cztery = 4;

    for (let cztery=0;cztery<3;cztery++){
        console.log('cztery z pętli', cztery); // po kolei wyrzuca 0,1,2
        console.log('CONST', PI); // tutaj ciągle wyrzuca z globalnego const,dopoki
        //nie ma w petli modyfikacji tej zmiennej -wtedy ta zmodyfikowana wyrzuci
    }
    console.log(cztery); // wyrzuca w konsoli wartosc z globalnego leta



(
    function() {
        const PI = 2;
        let cztery = 8;

        console.log('PI IIFE', PI);
        console.log('CZTERY IIFE', cztery);
    }
)();  // tutaj w iife są przesłonięte poprzednie zmienne, wychodzi 2 i 8., gdyby
// nie było w tym zakresie zmiennych to by pobral globalne, 3.14 i 4


{
    const dwa = 8;
    let cztery = 123;

    console.log('blok dwa', dwa); // pokazuje 8.
    console.log('blok cztery', cztery); // pokazuje 123.
}
    // console.log(dwa); // not defined

// Zadanie 3.

    for (var i=1; i<=10; i++){
        console.log(i);
    }
    console.log(i); // wypisuje 11. i zikrementowalo sie do 11 ale nie wykonalo juz tego co petli.

    // for ( let=1; j<=10;j++){
    // }
    // console.log(j); // not defined, let umiera poza pętlą

// Zadanie 5.

(
    function (){
        console.log('hello world')
})();

// Zadanie 6.

(
    function (name){
        console.log(name);

})('marek');


})
