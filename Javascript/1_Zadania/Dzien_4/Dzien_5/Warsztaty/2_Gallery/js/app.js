/**
 * Created by Jacek on 2015-12-16.
 */

/*
 <div class="fullScreen">
   <img src="./images/wrong.png">
   <button class="close">Close</button>
 </div>
 */
document.addEventListener("DOMContentLoaded", function () {

var liElems = document.querySelectorAll("li");
var images = document.querySelectorAll("img");
var body = document.querySelector("body");
console.log(liElems);
console.log(body);


for (var i=0;i<liElems.length;i++) {
    images[i].addEventListener("click", function () {
        console.log(this.getAttribute("src"));
        var bigDiv=document.createElement("div");
        var bigImg=document.createElement("img");
        var bigBtn=document.createElement("button");
        body.appendChild(bigDiv);
        bigDiv.classList.add("fullScreen");
        bigDiv.appendChild(bigBtn);  // button clsoe, gdy jest po elemencie img to nie widać go w przeglądarce, znika poza oknem na dole. Poza tym jest bardzo mały.
        bigBtn.classList.add("close");
        bigBtn.addEventListener("click", function () {
            var toDelete=bigDiv;
            toDelete.parentNode.removeChild(toDelete);
        })
        bigDiv.appendChild(bigImg);
        bigImg.setAttribute("src", this.getAttribute("src"));

    })
}


});
