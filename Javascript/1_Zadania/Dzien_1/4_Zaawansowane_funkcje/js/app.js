// Zadanie 2.
//
// function maxValue(arguments) {
//     var max =0;
//     for (var i=0; i<arguments.length;i++) {
//
//         if (arguments[i]>max) {
//             max = arguments[i];
//         }
//     }
//     return max;
// }
// console.log(maxValue(5, 29, 6, 4, 34));
//
//
function maxValue() {
  console.log(Math.max.apply(null, arguments)); // apply akceptuje tablice jako argumenty
}

maxValue(1, 3, 56, 43, 1, 0);

//Zadanie 3.
function countHello(n) {
    var counter = 1;
    var interval = setInterval(function() {
        counter++;
        console.log("Hello");
        if (counter > n) {
     clearInterval(interval)
 }
}, 2000);

}
countHello(3);

//Zadanie 4.

function sayHello() {
    console.log("Cześć");
}
sayHello();
// nie ma znaczenia miejsce wywołania funkcji w tym przypadku, funkcja się uruchamia i tak i tak, deklaracja przenosi się żeby silnik uruchomił funkcję.

var salute = function saySalute (){
    console.log("Witaj");
}
salute();
// w przypadku wyrażenia funkcyjnego nie jest ono przenoszone, zatem gdy wywołujemy funkcję przed jej definicją funkcja nie działa.
