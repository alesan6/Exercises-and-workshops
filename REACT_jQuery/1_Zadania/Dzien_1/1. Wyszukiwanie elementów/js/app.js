//Zadanie 1 z wykładowcą

$(document).ready(function() {

function yellowSection (){
$('section').addClass('backgroundElement');
}
yellowSection()

//Zadanie 2 z wykładowcą

$('section.links').find('nav').addClass('hover-effect');

//Zadanie 1.

$('.main').find('li').addClass('borderClass');

//Zadanie 2.

$('.main').find('li').addClass('colorText')
.addClass('backgroundElement');

//Zadanie 3.

$('.menu').find('a').css('color', 'red');

$('.menu').find('li').addClass('redLinks');

$('.menu').find('li').first().addClass('firstLi');

//Zadanie 4.

var h1 = $('h1');
h1.addClass('creepyHeader');
h1.parent().css("border", "1px solid green");
h1.next().addClass('crazy'); //dodał, sprwdzone w konsoli

//Zadanie 5.
var liElems =$('.menu').find('li');
var liElems1 = liElems.eq(0).addClass('menuLinks');
var liElems3 = liElems.eq(2).addClass('menuLinks');
var liElemsLast = liElems.last().addClass('menuLinks');

function showLi() {
console.log();
}
showLi(console.log(liElems1));
showLi(console.log(liElems3));
showLi(console.log(liElemsLast));

//Zadanie 6.
liElems3.hide();

//Zadanie 7.
var inputText = $('.form').find('input').val();
console.log(inputText);
var inputText2 = $('.form').find('input').last().val();
console.log(inputText2);

//lub szukanie za pomocą .form i nazwa id #name, #email.

//Zadanie 8.
var codersLink = $('#codersLink');
var clAtt = codersLink.attr('href')
console.log(clAtt);

codersLink.attr('href', 'www.wp.pl');

//zadanie 9.
var Links = $('.links');
var a = Links.find('a');
var hover = a.data('hover');
a.eq(0).attr('data-hover', 'Backbone');
a.eq(1).attr('data-hover', 'JavaScript');
a.eq(2).attr('data-hover', 'Angular');

});
