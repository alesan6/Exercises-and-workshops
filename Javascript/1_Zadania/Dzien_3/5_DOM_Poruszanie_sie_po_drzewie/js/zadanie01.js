/**
 * Created by Jacek on 2016-01-12.
 */
var buttons = document.getElementsByClassName("button");
console.log(buttons);

for (var i=0;i<buttons.length;i++) {
    buttons[i].addEventListener("click", function () {
        console.log(this.id); // this wskazuje co dokladnie.
        this.nextElementSibling.classList.toggle("hidden");
})
}
