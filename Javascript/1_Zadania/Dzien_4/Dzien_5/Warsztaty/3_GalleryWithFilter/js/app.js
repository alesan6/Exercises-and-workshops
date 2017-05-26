document.addEventListener("DOMContentLoaded", function() {
    //console.log("dziala");
    var allImages = document.querySelectorAll("#gallery img");
    //  console.log(allImages);
    var showButton = document.getElementById("showButton");
    //  console.log(showButton);
    var hideButton = document.getElementById("hideButton");
    //  console.log(hideButton);
    var tagInput = document.getElementById("tagInput");
    //  console.log(tagInput);

    showButton.addEventListener("click", function() {
        var tagInputText = this.previousElementSibling.previousElementSibling.value;
        //  console.log(tagInputText);

        var allTagsArray = [];
        for (var i = 0; i < allImages.length; i++) {
            var rowArray = [];
            for (var j = 0; j < allImages[i].dataset.tag.split(",").length; j++) {
                var rowArray = (allImages[i].dataset.tag.split(","));
            }
            allTagsArray.push(rowArray);
        }

        //  console.log(allTagsArray);

        for (var i = 0; i < allTagsArray.length; i++) {
            if (allTagsArray[i].indexOf(tagInputText) != -1) {
                //  console.log(allTagsArray[i]);
                //  console.log(allImages[i]);
                allImages[i].classList.remove("invisible");
                //  console.log(allImages[i]);
            }
        }
    });

    hideButton.addEventListener("click", function() {
        var tagInputText = this.previousElementSibling.previousElementSibling.previousElementSibling.value;

        var allTagsArray = [];
        for (var i = 0; i < allImages.length; i++) {
            var rowArray = [];
            for (var j = 0; j < allImages[i].dataset.tag.split(",").length; j++) {
                var rowArray = (allImages[i].dataset.tag.split(","));
            }
            allTagsArray.push(rowArray);
        }
        //  console.log(allTagsArray);

        for (var i = 0; i < allTagsArray.length; i++) {
            if (allTagsArray[i].indexOf(tagInputText) != -1) {
                console.log(allTagsArray[i]);
                allImages[i].classList.add("invisible");
                console.log(allImages[i]);
            }
        }
        tagInputText = this.previousElementSibling.previousElementSibling.previousElementSibling.value = "";

    });

});
/*
galeria poprawnie filtruje zdjęcia po tagach
*/
