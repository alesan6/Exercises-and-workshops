/**
 * Created by Jacek on 2016-01-11.
 */

document.addEventListener("DOMContentLoaded", function() { //wszystko się załaduje, dopiero zadziała js

//Zadanie z wykładowcą

var titleElement = document.querySelector(".title");

    function  getDataAnimation(givenElement){
      var value = givenElement.getAttribute("data-animation");
        return value;
    }
    console.log(getDataAnimation(titleElement));

});


// using getElementsByClassName that returns an array of elements

  // var titleElements = document.getElementsByClassName("title");
  //
  //   function  getDataAnimation(givenElements){
  //     // in order to return a specific value you must provide id
  //     // eg.: givenElements[0]
  //     var value = givenElements[0].getAttribute("data-animation");
  //       return value;
  //   }
  //   getDataAnimation(titleElements);

//Zadanie 1.
document.addEventListener("DOMContentLoaded", function() { //wszystko się załaduje, dopiero zadziała js

    var firstHomeElementById = document.getElementById("home");
    console.log(firstHomeElementById);
    var firstHomeElementByQuery = document.querySelector("#home");
    console.log(firstHomeElementByQuery);
    var liElements = document.querySelector("li:not([data-direction])");
    console.log(liElements);
    var firstBlockElements = document.getElementsByClassName('block');
    console.log(firstBlockElements[0]);

});

//Zadanie 2.
document.addEventListener("DOMContentLoaded", function() {

var navElements = document.querySelectorAll("nav li");
console.log(navElements, navElements.length);
var paragraphElements = document.querySelectorAll("div p");
console.log(paragraphElements, paragraphElements.length);
var divElements = document.querySelectorAll("article div");
console.log(divElements, divElements.length);

});


// Zadanie 3.
document.addEventListener("DOMContentLoaded", function() {

    var articleFirst = document.querySelector("article.first");
    console.log(articleFirst, articleFirst.length);

    var h1Elements = articleFirst.querySelectorAll("h1");
    console.log(h1Elements, h1Elements.length);

    var h2Elements = articleFirst.querySelectorAll("h2");
    console.log(h2Elements, h2Elements.length);

    var ofertsElements = articleFirst.querySelectorAll(".oferts");
    console.log(ofertsElements, ofertsElements.length);
        for (var i=0; i<ofertsElements.length;i++) {
            console.log(ofertsElements[i].tagName);
        }

      var divElements = articleFirst.querySelectorAll("div");
      console.log((divElements.length);
      for (var i=0; i<divElements.length;i++) {
          console.log(divElements[i].className);
      }

});
