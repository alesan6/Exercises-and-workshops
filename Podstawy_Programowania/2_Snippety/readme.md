<img src="http://coderslab.pl/wp-content/uploads/2016/03/logo-v2.png" align="right" style="width:150px; margin-top:45px"/>

# Podstawy programowania - Snippety
> Krótkie kawałki kodu, które pokazują zależności, rozwiązują popularne problemy oraz pokazują jak używać niektórych funkcji.


#### 1. Jak wylosować liczbę z danego zakresu np. od 1 do 10 ?

```JavaScript
var min = 1;
var max = 10;
var number = Math.random() * (max - min) + min;
console.log(number);
```

#### 2. Jak dodawać elementy do tablicy ?
Można użyć funkcji push() - jeśli chcesz dodawać elementy na koniec.

Chcemy dodać do tablicy tylko liczby podzielne przez 3, więc wielkość tablicy będzie mniejsza niż
10


```JavaScript
var arr = []; // tworzenie nowej pustej tablicy
var n = 10; // sprawdzamy 10 liczb
for(var i = 0; i < n; i++) {
    if( i % 3 === 0) {  // jeżeli liczba dzieli się bez reszty przez 0 to
        arr.push(i); // dodaj ją na koniec tablicy
    }
}
console.log(arr) // [0, 3, 6, 9]
```

#### 3. Jaka jest różnica w wypisywaniu, a zwracaniu wartości przez funkcję ?

```JavaScript
//Ta funkcja nie ma słowa kluczowego return, tylko wyświetla imię
function getName(surname) {
    if( surname === "Kowalski") {
        console.log("Jan");
    }    
}
var name = getName("Kowalski");
console.log(name) // "undefined" <- konsola wypisze "undefined", bo nic nie zwracamy


//Ta funkcja ma słowo kluczowe return
function getAge(person) {
    if( person === "Jan Kowalski") {
        return 99;
    }    
}
var age = getAge("Jan Kowalski");
console.log(age) // 99 <- konsola wypisze to co chcemy i możemy posługiwac się tą zmienną dalej w kodzie
```
