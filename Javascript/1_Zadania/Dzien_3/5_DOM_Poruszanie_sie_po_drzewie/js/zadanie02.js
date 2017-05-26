/**
 * Created by Jacek on 2016-01-12.
 */


 var buttons = document.getElementsByClassName("button");
 console.log(buttons);

 for (var i=0;i<buttons.length;i++) {

     buttons[i].addEventListener("click", function () {
         var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
         this.parentElement.style.backgroundColor= randomColor;
 })
 }
