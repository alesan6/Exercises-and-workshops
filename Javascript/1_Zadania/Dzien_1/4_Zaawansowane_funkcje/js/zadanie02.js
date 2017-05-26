/**
 * Zagniezdzanie funkcji.
 * Przesledz krok po kroku kazda linijke kodu. Kazda!
 * Napisz komentarze dla kazdej z linijek kodu
 */

//kompilator znajduję deklaracja funkcji sortArray
function sortArray() {

    //deklaracja tablicy points
    var points = [41, 3, 6, 1, 114, 54, 64];

    //zastosowanie metody sortowania w deklarowanej funkcji
    points.sort(function(a, b)){
            return a-b;
    };

    //zwraca tablice posortowaną
    return points;
}

//wywołanie funkcji
sortArray();
