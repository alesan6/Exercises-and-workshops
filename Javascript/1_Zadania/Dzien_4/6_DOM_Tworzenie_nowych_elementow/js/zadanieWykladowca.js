/**
 * Created by Jacek on 2016-01-12.
 */
var deleteButtons = document.getElementsByClassName('deleteBtn');

for (var i=0;i<deleteButtons.length;i++) {

    deleteButtons[i].addEventListener("click", function () {
        var toErase = this.parentElement.parentElement;
        toErase.parentNode.removeChild(toErase);

    })
}
