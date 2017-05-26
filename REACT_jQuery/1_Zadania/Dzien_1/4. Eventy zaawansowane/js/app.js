$(document).ready(function() {

// Zadanie z wykładowcą

var newDiv = $("<div class='panel'></div>");
newDiv.html('jestem sobie divek');
$('body').on('mouseenter', 'div', function(){
    newDiv.css('color', 'red');
});
$('body').append(newDiv);

// Zadanie 1

function task1(){

    var btnRemove = $('<button class="remove">Usuń</button>');
    $('.main').on('click', '.remove', function(){
            $(this).prev().prev().remove();
            $(this).prev().remove();
            $(this).remove();
    });
    $('.main').find('li').after(btnRemove);


    var btnEdit = $('<button class="edit">Edytuj</button>');
    $('.main').on('click', '.edit', function(){
            var btn = $(this);
            btn.prev().addClass('editable');
            btn.text('Zatwierdź');
            btn.addClass('confirm');
            btn.removeClass('edit');
    });

    $('.main').on('click', '.confirm', function(){
            var btn1 = $(this);
            var user = $('#addUser').val();
            var age = $('#age').val();

            btn1.prev().text(user);
            btn1.prev().attr('data-age', age);
            btn1.prev().removeClass('editable');
            btn1.text('Edytuj');
            btn1.addClass('edit');
            btn1.removeClass('confirm');
    });


    $('.main').find('li').after(btnEdit);

}
task1();
});
