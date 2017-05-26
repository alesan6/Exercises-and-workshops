/**
 * Created by Jacek on 2016-01-12.
 */
var button = document.querySelector(".button");
console.log(button);

var menu = document.querySelector(".menu");
console.log(menu);

button.addEventListener("click", function () {

        var liNew = document.createElement("li");
        menu.appendChild(liNew);
        liNew.innerHTML = menu.children.length -1;
})
