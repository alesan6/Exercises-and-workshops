#  Funkcje

> Pamiętaj, żeby oddzielać ćwiczenia komentarzami i pisać czytelny, dobrze sformatowany kod.

## Zadania rozwiązywane z wykładowcą

### FooBar ...FOOBAR  (~ 7min - 12min)

Napisz funkcję o nazwie ```FooBar``` przyjmującą jedną zmienną. Funkcja ta ma wypisywać kolejne liczby, ale:
* w miejsce liczb podzielnych przez 3 wypisywać ```Foo```,
* w miejsce liczb podzielnych przez 5 wypisywać ```Bar```,
* w miejsce liczb podzielnych przez 3 i 5 wypisywać ```FOOBAR```.

Na przykład dla parametru ```x = 15``` wynik ma być następujący:
```  
12Foo4BarFoo78FooBar11Foo1314FOOBAR
 ```

### Obliczanie potęgi (~ 7min - 12min)
Napisz funkcję przyjmującą dwie liczby jako argumenty: **a** i **n**. Funkcja **ma zwracać**  wynik **a** do potęgi **n**.
Użyj pętli, a nie ```Math.pow()```

-------------------------------------------------------------------------------

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 5min - 10min)
Napisz funkcję miksującą o nazwie ```miksowanie```, która jako argument będzie przyjmowała napis.
Zadaniem funkcji **jest zwrócenie** tego napisu, ale poprzedzonego słowem ```zmiksowana ```. Funkcja ma zwracać nowo powstały napis (poprzez ```return```).
Następnie wypisz w konsoli to, co zwróciła funkcja.

Przykład:
```
input -> "marchewka"
output -> "zmiksowana marchewka"
```

### Zadanie 2 (~ 5min - 10min)
Napisz funkcję, która przyjmuje jako argument liczbę **n** i wyświetla **n** razy na stronie napis "Programowanie jest fajne!".

### Zadanie 3 (~ 5min - 10min)
Napisz funkcję, która przyjmuje jako argumenty trzy liczby i **zwraca** największą z nich (zwraca, a nie wypisuje na ekranie).Wypisać
możesz dopiero jak zwrócisz wynik z funkcji.

### Zadanie 4 (~ 10min - 15min)
Stwórz funkcję, która **będzie zwracała** (poprzez ```return```) sumę liczb z tablicy. Tablica powinna być przekazana do funkcji jako argument.

Przykład:
```JavaScript
input -> [1,2,3]
output -> 6
```

### Zadanie 5 (~ 5min - 10min)

Stwórz funkcję anonimową i przypisz ją do zmiennej. Zadaniem funkcji jest wypisanie dziesięć razy: "Gdy piszę kod zawszę i wszędzie używam funkcji oraz nie tworzę zmiennych globalnych".

### Zadanie 6 (~ 15min - 20min)
Napisz funkcję ```rentCost(days)```, która będzie pobierać liczbę dni jako argument, a następnie wyliczać koszt wynajmu pokoju według podanego wzoru:
* wynajem trwa jeden dzień, koszt pokoju 200 zł/dzień,
* wynajem trwa od dwóch do trzech dni, koszt pokoju 180 zł/dzień,
* wynajem trwa od czterech do siedmiu dni, koszt pokoju 160 zł/dzień,
* wynajem trwa osiem lub więcej dni, koszt pokoju 150 zł/dzień.

Dodatkowo za każdy pełny tydzień przysługuje 50 zł zniżki. Do wyliczenia pełnych tygodni użyj poniższego kodu:

```JavaScript
var numbersOfWeeks = Math.floor(days / 7); //Math.floor jest metodą, która zaokrągla liczbę w dół.
```

Przykład:
```JavaScript
input -> 8
output -> 1150
```

### Zadanie 7 (~ 15min - 20min)
Napisz funkcję ```rockPaperScissors(player1, player2)```, która będzie pobierać dwa napisy i na ich podstawie zwracać informacje, kto wygrał. Poprawne napisy przyjmowane przez funkcję to: papier, nozyce, kamien.

Funkcja ma zwracać jeden z czterech napisów:
* "Gracz 1 wygrał",
* "Gracz 2 wygrał",
* "Remis",
* "Błędne informacje".

Przykład:
```JavaScrit
input -> "papier", "nozyce"
output -> "Gracz 2 wygrał"
```

### Zadanie 8 (~ 15min - 20min)
Napisz funkcję ```calculateTip(amount, raiting)```, która będzie przyjmować dwa argumenty:
* kwotę do zapłaty,
* opis słowny obsługi.
Jeśli opis jest taki jak zdefiniowano poniżej, funkcja ma zwracać kwotę napiwku, jeśli opis jest nieznany &ndash; funkcja powinna zwracać napis "Opis nieczytelny".
s
Opis może przyjmować następujące wartości:
"Bardzo dobra obsluga" => 25% napiwku,
"Dobra obsluga" => 20% napiwku,
"Srednia obsluga" =>15% napiwku,
"Zla obsluga" => 0% napiwku.

Przykład:
```JavaScrit
input -> 100, "Bardzo dobra obsluga"
output -> 25
```
