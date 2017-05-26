/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    var homeElement = document.getElementById("home");
    var childElements = document.querySelector(".oferts").children;
    var banner = document.querySelector(".ban");
    var blocks = document.querySelectorAll(".block");
    var links = document.querySelector(".links").children; // children=tablica

    /*
    Poniżej napisz kod rozwiązujący zadania
     */

// Zadanie z wykładowcą
function getDatasInfo(elements) {
    var dataValueArray = [];

    for (var i=0; i<elements.length;i++) {
    // console.log(elements[0].dataset.color); // już wiemy, że jest to color - wartośćć
        dataValueArray.push(elements[i].dataset.color);
    }
    return dataValueArray;
}
console.log(getDatasInfo(links));
// getDatasInfo(links); // links stworzone już były wcześniej w 10 wierszu.


// Zadanie 1.
// można np zmienna.constructor === Array
console.log(homeElement);
console.log(childElements); // tablica, consola tak wyrzuciła
console.log(banner);
console.log(blocks); // tablica consola tak wyrzuciła

for (var i=0; i<childElements.length;i++) {
    console.log(childElements[i], childElements[i].className, childElements[i].tagName);
}

for (var i=0; i<blocks.length;i++) {
    console.log(blocks[i], blocks[i].className, blocks[i].tagName);
}


// Zadanie 2.
for (var i=0; i<blocks.length;i++) {
    console.log(blocks[i].innerHTML);
}

for (var i=0; i<blocks.length;i++) {
    console.log(blocks[i].outerHTML);
}


// Zadanie 3.
var mainFooterElement = document.getElementById("mainFooter");
console.log(mainFooterElement);
function getId(element) {
    var idMainFooter = mainFooterElement.id;
    return idMainFooter;
}
console.log(getId(mainFooterElement));

//Zadanie 4.

function getTags(elements) {
    var nameTagArray=[];
    for (var i=0; i<elements.length;i++) {
        nameTagArray.push(elements[i].tagName);
    }
    return nameTagArray;
}
console.log(getTags(childElements));

// Zadanie 5.
function getClassInfo(element) {
  return element.classList
}
console.log(getClassInfo(banner))

// Zadanie 6.
var liElements = document.querySelectorAll("nav li:not([data-direction])");
console.log(liElements);

function setDataDirection(elements) {
    for (var i=0; i<elements.length;i++) {
        elements[i].dataset.direction="top";
    }
}
console.log(setDataDirection(liElements));
 });
