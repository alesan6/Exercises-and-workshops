// Zadania z wykładowcą.

let namesA = ['Zosia', 'Marcin', 'Kamil'];
let namesB = ['Ala', 'Puszek', ...namesA, 'Jan', 'Karol'];

console.log(namesB);

// function getAverage(...args) {
//      var sum= 0;
//      var average=0;
//      var argsL = args.length;
//      for (var i=0; i<argsL; i++) {
//          sum += args[i];
//      }
//      average = sum/argsL;
//      return average;
// }
// console.log(getAverage(2,3,5,6,7,8));

// strzalkowo:

var getAverage = (...args) => { // kazda strzalkowa przypisana do zmmiennej
    var sum = args.reduce((prev, curr) => {
        return prev +curr;
    });
    return sum /args.length;
}
console.log(getAverage(1,2,35,6));

//Zadanie 1.

var name = 'Marek';
var arr = [...name];
console.log(arr);

//Zadanie 2.

var fruits = ['pomelo', 'apple', 'orange'];
var vegetables = ['parrot', 'onion', 'pikle'];

var mix = [...fruits, ... vegetables];
console.log(mix);
