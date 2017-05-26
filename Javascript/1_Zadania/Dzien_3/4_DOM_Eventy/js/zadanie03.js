/**
 * Created by Jacek on 2016-01-12.
 */

 // Zadanie 3
 document.addEventListener("DOMContentLoaded", function(){
   var countClick1 = 0;
   var countClick2 = 0;
   var countClick3 = 0;
   var button1Element = document.getElementById('button1');
   var button2Element = document.getElementById('button2');
   var button3Element = document.getElementById('button3');

   var spanCounter = document.querySelectorAll(".counter");

   button1Element.addEventListener("click", function(){
       countClick1 += 1;
       spanCounter[0].innerHTML = countClick1;
   });

   button2Element.addEventListener("click", function(){
       countClick2 += 1;
       spanCounter[1].innerHTML = countClick2;
   });

   button3Element.addEventListener("click", function(){
       countClick3 += 1;
       spanCounter[2].innerHTML = countClick3;
   });
   
 });
