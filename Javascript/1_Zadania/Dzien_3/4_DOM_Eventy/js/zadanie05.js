/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){

    var  divElements = document.querySelectorAll(".box");
    console.log(divElements);

    for (var i=0; i<divElements.length;i++) {
        divElements[i].addEventListener("click",function(){
            var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            this.style.backgroundColor= randomColor;

        });
    }


});
