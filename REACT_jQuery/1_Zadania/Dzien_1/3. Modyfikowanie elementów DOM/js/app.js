$(document).ready(function() {
//Zadanie z wykładowcą

var newDiv = $("<div class='panel'></div>");
$('.people').after(newDiv);
newDiv.text('jestem sobie nowy divek');

//Zadanie 1.

function people() {
$('.people').find('input').eq(2).on('click', function(event){
    event.preventDefault();
    var add = $('#addUser').val();
    var age = $('#age').val();
    var newPerson = $("<li>");
    newPerson.text(add);
    newPerson.attr('data-age', age);
    var coloredLi = colored(newPerson);
    $('.main').append(coloredLi);

});
        function colored(element){
            var ageAge = element.data('age');
            switch(true) {
                case ageAge < 16:
                    element.css('color', 'green');
                    break;
                case ageAge < 41:
                    element.css('color', 'blue');
                    break;
                default:
                    element.css('color', 'brown');
            }
            return element;
        }
}
people();


//Zadanie 2.

function span() {
var span1 = $("<span>3. Jestem tutaj before</span>");
$('.where-i-am').before(span1);
var span = $("<span>2. Jestem tutaj prepend</span>");
$('.where-i-am').prepend(span);
var span2 = $("<span>4. Jestem tutaj after</span>");
$('.where-i-am').after(span2);
var span3 = $("<span>1. Jestem tutaj append</span>");
$('.where-i-am').append(span3);


}
span();

//Zadanie 3.


var blocks = $('.block');
blocks.on('click', function(){
    $(this).clone().appendTo('.right');
    $(this).remove();
})


});
