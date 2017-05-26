/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */


//kompilator znajduje deklarację funkcji
function jeden() {

    //deklarujemy zmienną lokalną zmienna1 i przypisujemy wartość 1
    var zmienna1 = 1;

    //deklaracja funkcji wyższego rzędu
    function dwa() {

        //wywołujemy w konsoli wartość zmiennej1
        console.log(zmienna1);

        //deklarujemy zmienną lokalną zmienna2 i przypisujemy wartość 3
        var zmienna2 = 3;
    }

    //wywyołujemy funkcję dwa
    dwa();

    //zmienna2 jest wywoływana poza ciałem funkcji, w ktorej zostala zadeklarowana
    console.log(zmienna2)
}

//wywołujemy funkcję jeden
jeden()
