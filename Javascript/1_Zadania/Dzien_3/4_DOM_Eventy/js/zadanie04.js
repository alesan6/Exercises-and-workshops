/**
 * Created by Jacek on 2016-01-12.
 */
 // Zadanie 4
 document.addEventListener("DOMContentLoaded", function(){
   var clik = 0;
   var counter1 = document.querySelector(".counter");
   var buttonElements = document.querySelectorAll("button");

   for (var i=0; i<buttonElements.length;i++) {
       buttonElements[i].addEventListener("click", function (){
           clik += 1;
           counter1.innerHTML = clik;
       });
   }

 });
