//Zadania  z wykładowcą

var weather = ['snow', 'rain', 'sun'];
var [a, , b] = weather;
console.log(a, b);

//
const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
};

let {type, autoStart} = slider;
console.log(type, autoStart);

//albo tak:
// let {type, auoStart} = {
//    type: "infinite",
//    numberOfItems: 10,
//    center: true,
//    autoStart: true
// };
// console.log(type, autoStart);

//Zadanie 1.

var arr = ['Jacek', 'Pawel', 'Rudolf'];
let [name1, name2, name3] = arr;

//Zadanie 2.

var generateRandomNumbers = () => {
    var arr1 = [];
    while(arr1.length < 6) {
        var number = Math.floor(Math.random() * 6);
        arr1.push(number);
    }
    return arr1;
}
var nmb = generateRandomNumbers();
let [first, ,third] = nmb;

console.log(nmb);
console.log(first, third);

// Zadanie 4.

function getAnimal() {
    return {
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
    }
}

let {name: catName, getVoice: catVoice} = getAnimal();
console.log(catName, catVoice()); // catVoice jako metoda z ().
