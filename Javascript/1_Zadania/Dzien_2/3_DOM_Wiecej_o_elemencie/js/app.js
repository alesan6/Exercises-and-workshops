/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function(){
    /*
    Poniżej napisz kod rozwiązujący zadania
     */

//Zadanie z wykładowcą
var liElements =document.querySelectorAll(".ex5 li:not([data-direction])");
console.log(liElements);
 for (var i=0; i<liElements.length; i++) {
     liElements[i].dataset.direction="up"; // sprawdzać w consoli->Elements->rozwijać listę czy dodało "up" - dodało
 }

var listElems = document.querySelectorAll(".ex5 li"); // DRUGI SPOSÓB: (".ex5 li:nth-child(2n)") bez if (wiersz 19)
 for (var i=0; i<listElems.length;i++) {
     if (i%2 !== 0) {
         listElems[i].style.backgroundColor="green";
     }
 }

listElems[4].classList.toggle("big");

// // var secondListElems = document.querySelectorAll(".ex5 li:nth-child(2n+3)");
// // for (var i=0; i<listElems.length;i++) {
// //     secondListElems[i].style.textDecoration = "line-through";
// }


// Zadanie 1.
// jeśli w var... document.query.SelectorALL to musimy wskazać [0],pierwszy element. przy querySelector nie dajemy [0]
//do opisu linka element.innerText
var logoImageChrome = document.querySelector(".ex1 .chrome");
logoImageChrome.style.width = "100px";

var logoImageFirefox = document.querySelectorAll(".ex1 .firefox");
logoImageFirefox[0].style.backgroundImage= "url('assets/img/firefox.png')";

var logoImageEdge = document.querySelectorAll(".ex1 .edge");
logoImageEdge[0].style.backgroundImage= "url('assets/img/edge.png')";

var linkEdge = document.querySelectorAll(".edge~a");
linkEdge[0].setAttribute("href", "https://www.edge.com");
linkEdge[0].innerText="Edge";

var linkFirefox = document.querySelector(".firefox~a");
linkFirefox.setAttribute("href", "https://www.firefox.com");
linkFirefox.innerText="Firefox";

var linkChrome = document.querySelector(".chrome~a");
linkChrome.innerText="Chrome";

//Zadanie 2.
var nameElem = document.getElementById("name");
var favColorElem = document.getElementById("fav_color");
var favMealElem = document.getElementById("fav_meal");
nameElem.innerHTML = "Janusz";
favColorElem.innerHTML = "koperkowy";
favMealElem.innerHTML = "kopytka";


//Zadanie 3.
var ulClass = document.querySelector(".ex3 ul");
ulClass.classList.add("menu");

var liElements3 = document.querySelectorAll(".ex3 li");
for (var i=0;i<liElements3.length;i++) {
 liElements3[i].classList.remove("error");
 liElements3[i].classList.add("menuElement");
}

//Zadanie 4.
var liElements4 = document.querySelectorAll(".ex4 li");
for (var i=0;i<liElements4.length;i++) {
    liElements4[i].setAttribute("data-id", i+1);
}

for (var i=0;i<liElements4.length;i++) {
    liElements4[i].dataset.id=i+1;
}

});
