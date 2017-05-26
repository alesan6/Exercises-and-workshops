/*
 <span class="tooltipText">Text tooltipa</span>
 */
document.addEventListener("DOMContentLoaded", function() {
    //console.log("**********");
    var tooltipElements = document.getElementsByClassName('tooltip');
    //  console.log(tooltipElements);

    var newElement = document.createElement("span");

    for (var i = 0; i < tooltipElements.length; i++) {
        tooltipElements[i].addEventListener("mouseover", function() {
            //  console.log("mouseover");
            //console.log(this.dataset.text);
            newElement.innerHTML =
                "<span class=\"tooltipText\">" + this.dataset.text + "</span>";
            //console.log(newElement);
            this.appendChild(newElement);
        });

        tooltipElements[i].addEventListener("mouseout", function() {
            //  console.log("mouseout");
            //console.log(this.dataset.text);
            this.removeChild(newElement);
        });
    }
});
/*
tooltipy pokazuja się po najechaniu myszką na elementy podkreslone i chowaja się po zejsciu myszki z elementu
*/
