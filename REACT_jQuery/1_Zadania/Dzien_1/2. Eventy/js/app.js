$(document).ready(function() {

//Zadania z wykładowcą

$('dt').on("mouseenter", function () {
    console.log($(this));

});

//$('.hero-buttons').find('button').on("click", function (){
//console.log($(this).data('feature')); // ale nie zadziała na nowo dodanym buttonie potem
//});
$('.hero-buttons').on('click', 'button', function (){ // ta wersja zadziała na wszystkie już buttony, nawet potem dodane
    console.log($(this).data('feature')); // this na TEN 'button' po 'click'

});

//Zadanie 1.

var ddElems = $('.superhero-description').find('dd');
ddElems.addClass('hide');

$('.superhero-description').on('click', 'dt', function (){

    $(this).next().toggleClass('hide');
});

//Zadanie 2.
 function button() { // calosc tworzona w funkcji.
    $('.task2').on('click', 'button', function () {

        if ($(this).hasClass('added')){
            $(this).removeClass('added');
            $(this).html('Dodaj');
            $(this).next().css('border', 'none');

        } else {
            $(this).addClass('added');
            $(this).next().css('border', '1px solid green');
            $(this).html('Dodano');
        }
    //można zrobic tez clickcounterem i modulo, na odwrot warunki.
    });
}

button(); // trzeba wywolac funkcje
});
