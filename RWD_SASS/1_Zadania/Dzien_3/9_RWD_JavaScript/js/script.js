// event resize

var counterResize = 0;
window.addEventListener('resize', function() {
    counterResize++;
    document.getElementById('counter-resize').innerHTML= counterResize; //wrzuca counter do div z id counter-resize.

});

// matchMedia

var mobile= window.matchMedia("(min-width: 200px) and (max-width: 700px)");
var counterMatchMedia= 0;

mobile.addListener(function(mobile){
    if (mobile.matches) {
        counterMatchMedia++;
        document.getElementById('counter-matchMedia').innerHTML= counterMatchMedia;
    }
});

//Zadanie1.
var menuToggle= document.getElementById("toggle-menu");
var ulList= document.querySelector("#menu");

menuToggle.addEventListener("click", function (){ // na div 'menu' dajemy eventListenera
    ulList.classList.toggle("open"); // click dodaje klase 'open' do ul i pokazuje listę. kolejny click zabiera tą klasę

});
// inny sposób zapisu:
// document.getElementById('toggle-menu').onclick = function(){
//     document.getElementById('menu').classList.toggle("open");
// }
