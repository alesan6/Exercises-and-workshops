document.addEventListener("DOMContentLoaded", function() {
    //console.log("******");
    var listElements = document.querySelectorAll(".nav>ul>li");
    //console.log(listElements);

    for (var i = 0; i < listElements.length; i++) {
        listElements[i].addEventListener("mouseover", function() {
            //console.log("mouseover");
            if (this.firstElementChild != null) {
                //  console.log(this.firstElementChild);
                this.firstElementChild.style.display = "inline-block";
            }
        });

        listElements[i].addEventListener("mouseout", function() {
            //  console.log("mouseout");
            if (this.firstElementChild != null) {
                //  console.log(this.firstElementChild);
                this.firstElementChild.style.display = "none";
            }
        });
    }
});
/*
menu rozwija się tak jak przewiduje to treść zadania
*/
