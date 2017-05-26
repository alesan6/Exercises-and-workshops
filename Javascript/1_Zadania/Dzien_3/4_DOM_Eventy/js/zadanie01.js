/**
 * Created by Jacek on 2016-01-12.
 */
document.addEventListener("DOMContentLoaded", function(){

var menu = document.querySelector("#menu");
var paragraf = document.querySelector("p");

menu.classList.add("menu");
paragraf.innerHTML = "A to jest paragraf w zadaniu 1";

});

// 1. skrypt nie działa, kod strony html nie zdąrzył się wgrać.
// 2. poprawiło.
// 3. w tym przypadku nic się już nie zmienia, DOMContentLoaded działa tak czy owak.
