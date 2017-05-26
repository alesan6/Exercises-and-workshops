// Zadanie z wykładowcą.

String.prototype.upperLower = function(){
  var resultString = "";
  for(var i=0;i<this.length;i++){
    if (i%2 !==0){
      resultString += this[i].toUpperCase();
    }else{
      resultString += this[i].toLowerCase();
    }
  }

  return resultString;
}

var funnyText = "Java script jest super.".upperLower();
console.log(funnyText);


// Zadanie 1.
var book = {
    title: "Gra Endera",
    author: "Andrzej Andrew",
    numberOfPages: 300
};

console.log(book.title);
console.log(book.author);
console.log(book.numberOfPages);

// konstruktor
function Book(title,author,numberOfPages,volumes) {
    this.title = title;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.volumes = volumes;
    this.showInfo = function(){
        console.log(this.title,this.author,this.numberOfPages,this.volumes);
    }
}

var book1 = new Book("Gra o tron", "George Martin", 800,6);
var book2 = new Book("Gra Endera", "Andrzej Andrew", 300,1);

//Zadanie 2.
var person = {
    name: "Freddy Kruger",
    age: 66,
    sayHello: function(){
        console.log("hello");
    }

}
console.log(person.name);
console.log(person.age);
// console.log(person.sayHello()); wywołuje w konsoli poprzez person.sayHello()

//Zadanie 3.

var train ={}

train instanceof Object; // jest true (sprawdzam to wpisując to w konsoli)

//Zadanie 4.
var car = {
    brand: "fiat",
    color: "yellow",
    numberOfKilometers: 0,
    printCarinfo: function() {
        return this.brand + " " + this.color + " " + this.numberOfKilometers;
    },
    drive: function(km){
        return this.numberOfKilometers = this.numberOfKilometers + (km);
    }
}
console.log(car.printCarinfo());
car.drive(100);
console.log(car.printCarinfo());

//Zadanie 5. NIE WIEM JAKĄ ZROBIĆ METODĘ
// car.review = ["12.10.2011", "11.10.2012"];
// // car.addReview = function(string) {
// //     return this.review = this.review + review.push((string));
// // }
// // console.log(car.addReview());
//Zadanie 5 :)
car.dateOfCheck = ["16-07-2012","12-01-2013","28-10-2014","30-04-2015"];

addCheck = function(date) {
  car.dateOfCheck.push(date);
},
displayChecks = function() {
  for (var i=0; i<car.dateOfCheck.length; i++) {
    console.log(car.dateOfCheck[i]);
  }
}
displayChecks(car);
addCheck("18-02-2017");
displayChecks();

//Zadanie 6.
var bird = {
    type: "sokół",
    name: "Klekot",
    getType: function() {
        console.log(bird.type);
    }
}
// instanceof Object zwraca TRUE.

//Zadanie 7.
var myString = "Hej sokoły";
// W OBU PRZYPADKACH WYSKAKUJE BŁĄD, ŻE ZMIENNA JEST NIEZDEFINIOWANA?
var myNumber = 4;
