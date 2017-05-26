/* Ta funkcja nie robi nic sensownego.
*/
function doSomething(number) {
    var numberOfSlides = 10;
    var slideWidth = 400;
    var baz;

    var foo = "Galeria ma " ;
    console.log(foo + numberOfSlides + ' zdjęcia');

    var naj = "naj ";
    for(var i = 0; i < numberOfSlides - 1; i++) {
      baz = "Zdjęcie nr " + i + " lubię " + naj + " bardziej";
      console.log(baz)
      naj += " naj";
    }
    return naj;
}
