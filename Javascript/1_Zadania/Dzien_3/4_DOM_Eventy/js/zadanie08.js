/**
 * Created by Jacek on 2016-01-12.
 */
 document.addEventListener("DOMContentLoaded", function() {
   var windowHeight = document.getElementById("windowHeight");
   var windowWidth = document.getElementById("windowWidth");

   window.addEventListener("resize", function() {
     console.log(this.innerHeight);
     //console.log(this);
     windowHeight.innerHTML = this.innerHeight;
     windowWidth.innerHTML =  this.innerWidth;
   });

 });
