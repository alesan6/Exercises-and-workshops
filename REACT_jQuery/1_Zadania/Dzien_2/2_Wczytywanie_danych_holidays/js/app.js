$(function() {

    // variables for DOM
    var ul = $("#holiday-dates");
    var apiKey = 'd6410a3d-b444-4b0f-a8f4-b1c086782d5e';
    var country = 'PL';
    var year = 2014;
    //Tutaj wpisz cały adres z kluczem, będzie on wyglądał mniej więcej tak:
    //'https://holidayapi.com/v1/holidays?key=21e877a6-77f7-7777-9999-e6f5f4519f25&country=EN&year=2016';
    var holidayUrl = 'https://holidayapi.com/v1/holidays?key='+apiKey+'&country='+country+'&year='+year;

    function insertHolidays(days) {
        //Użyj sposobu na pobranie wartości z obiektu (nie kluczy) np. pętla for in
        console.log(days);

        for (key in days) { // klucz w obiekcie (days)
            var li = $('<li>', {class: "holiday"});
            var span = $('<span>');
            li.text(days[key][0].name); // wyciągamy już name// zamiast tex moze byc append
            span.text(days[key][0].date);
            li.append(span);
            ul.append(li);
        }

    }

    $.ajax({
        url: holidayUrl,
        method: 'GET',
        dataType: 'JSON'
    }).done(function(response){
        // console.log(response);
        insertHolidays(response.holidays);
    }).fail(function(error){
        console.log(error);
    })

});
