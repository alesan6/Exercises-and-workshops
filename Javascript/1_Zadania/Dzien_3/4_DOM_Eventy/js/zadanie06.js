/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function() {

var boxElement = document.getElementById("box");
var globalXElement = document.getElementById("globalX");
var globalYElement = document.getElementById("globalY");
var localXElement = document.getElementById("localX");
var localYElement = document.getElementById("localY");

boxElement.addEventListener("mousemove", function(event) {
    globalXElement.innerHTML = event.clientX;
    globalYElement.innerHTML = event.clientY;
    localXElement.innerHTML = event.screenX;
    localYElement.innerHTML = event.screenY;
});

});
