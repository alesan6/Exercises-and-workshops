document.addEventListener("DOMContentLoaded", function(event) {
    var nextButton = document.getElementById("nextPicture");
    var prevButton = document.getElementById("prevPicture");
    var allListElements = document.querySelectorAll("li");


    var indexOfPicture = 0;
    //pkt3
    allListElements[indexOfPicture].classList.add("visible");

    nextButton.addEventListener("click", function() {

        allListElements[indexOfPicture].classList.remove("visible");
        if (indexOfPicture === allListElements.length - 1) {
            indexOfPicture = -1;
        }
        indexOfPicture++;
        allListElements[indexOfPicture].classList.add("visible");

    });

    prevButton.addEventListener("click", function() {

        allListElements[indexOfPicture].classList.remove("visible");

        indexOfPicture--;
        if (indexOfPicture < 0) {
            indexOfPicture = allListElements.length - 1;
        }
        allListElements[indexOfPicture].classList.add("visible");

    });

    //pkt7
    //w tej chwili slider dziala poprawnie do czasu gdy lista obrazkow przyjmuje niepoprawną wartośc, wtedy obrazki znikaja z ekranu - wychodzimy poza tabele z allListElements


});;
