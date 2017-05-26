
function whoAreYou(object) {
    return `My name is ${object.name} ${object.lastName}.
I am ${2017 - object.yearOfBirth} years old.
My profession is ${object.proffesion}.`
}

const person = {
  name: "Vlad",
  lastName: "Drăculea",
  yearOfBirth: 1431,
  proffesion: "Lord of Wallachia"
};

whoAreYou(person);
console.log(whoAreYou(person));


//Zadanie 1.

let x = 20;
let y = 10;

console.log(`Suma= ${x+y}`);

//Zadanie 2.

let imie = "Marek";

console.log(`${imie} Rychu thats my name`);

//Zadanie 3.

function showText() {
    return `"Myślę, że jest wiele piękna
w posiadaniu problemów.
To jeden ze sposobów w jaki się uczymy"
Herbie Hancock`;
}

console.log(showText());
document.querySelector('.cite').innerHTML = showText();
//jquery -->  $('.cite').html(showText());

//Zadanie 4.

function queryString(arr) {
    return [...arr]; // trzeba w tablicy.
}

var arr= [1,2,3,4];
console.log(`${queryString(arr)}`);

//Zadanie 5.

const button = {
  value: "Send message",
  idName: "sendMsg",
  width: "100px",
  padding: "20px",
}

console.log(`To jest button.
Jego szerokośc to ${button.width}.
Napis, który na nim widnieje to "${button.value}"`);

var body = $('body');
var newBtn = $(`<button id="${button.idName}" style="width: ${button.width};
 padding: ${button.padding}">${button.value}</button>`);
 body.append(newBtn);
