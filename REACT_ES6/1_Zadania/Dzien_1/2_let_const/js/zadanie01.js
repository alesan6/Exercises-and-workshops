//I. Sprawdź najpierw zasięg let
 {
     //A1 - wypisuję zmienną numbers przed deklaracją
     //Wynik w konsoli to TODO: undefined
     //Dlaczego taki wynik? TODO: wywolanie zmiennej bez jej deklarcji wczesniej
    //  console.log(numbers);

     let numbers = [2,3, 4];
     //A2 - wypisuję zmienną numbers po deklaracji
     //Wynik w konsoli to TODO: 2,3,4
     //Dlaczego taki wynik? TODO: wywoluje po deklaracji
     console.log(numbers);
 }

 //A3 - wypisuję zmienną numbers za blokiem
 //Wynik w konsoli to TODO: undefined
 //Dlaczego taki wynik? TODO: poza bracketami
 // console.log(numbers);



//II. Sprawdź teraz  zasięg const
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to TODO: undefined, blad w Pi zamiast PI
    //Dlaczego taki wynik? TODO: gdyz bez wczesniejszej deklaracji
    // console.log(Pi);

    const PI = 3.14;
    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO: 3.14
    //Dlaczego taki wynik? TODO: wywoluje po deklaracji
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: undefined
//Dlaczego taki wynik? TODO: poza bracketem, jest lokalnie zdefiniowany
// console.log(PI);
