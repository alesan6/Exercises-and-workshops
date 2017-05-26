$(function(){

var ul = $('.repertuar');
var url = 'http://localhost:3000';

function insertMovies(movies) {
    var moviesLength = movies.length;

    for (var i=0; i<moviesLength;i++){
        var newLiElement = $('<li>');
        var newH3 = $('<h3>');
        var newP = $('<p>');
        //  $('<button>Delete</button>', ('data-id': movies[i].id))  inny zapis tego co ponizej
        var newDltBtn = $('<button class="deleteButton" data-id="'+movies[i].id+'">Delete</button>');
        var newEditBtn = $('<button class="updateButton" data-id="'+movies[i].id+'">Zmodyfikuj</button>');

        newH3.text(movies[i].title);
        newP.text(movies[i].description);
        newLiElement.append(newH3);
        newLiElement.append(newP);
        newLiElement.append(newDltBtn);
        newLiElement.append(newEditBtn);
        ul.append(newLiElement);
    }
}
    $.ajax({
        url: url+'/movies',
        method: 'GET',
        dataType: 'JSON'

    }).done(function(response){
        console.log(response);
        insertMovies(response)

    }).fail(function(error){

})

// Zadanie 2.

$('#addMovie').on('click', function (event){
    event.preventDefault();
    var titleMovie = $('.get_title').val();
    var descriptionMovie = $('.get_description').val();
    var newMovie = {
        title: titleMovie,
        description: descriptionMovie
    };

    $.ajax({
        url: url+'/movies',
        method: 'POST',
        dataType: 'JSON',
        data: newMovie
    }).done(function(response){
        console.log(response);
        var newLiElement = $('<li>');
        var newH3 = $('<h3>');
        var newP = $('<p>');
        var newDltBtn = $('<button class="deleteButton" data-id="'+response.id+'">Delete</button>'); // zmieniamy na response.id
        var newEditBtn = $('<button class="updateButton" data-id="'+response.id+'">Zmodyfikuj</button>'); // -||-

        newH3.text(response.title);
        newP.text(response.description);
        newLiElement.append(newH3);
        newLiElement.append(newP);
        newLiElement.append(newDltBtn); // automatycznie dodaje deleteButton do nowego filmu
        newLiElement.append(newEditBtn);
        ul.append(newLiElement);
    }).fail(function(error){
        console.log(error);
    })
})

//Zadanie 3.
function removeMovie(){
    ul.on('click', '.deleteButton', function(){
        var btn = $(this);
        $.ajax({
            url: url+'/movies/' + btn.data('id'), // id zależne od danego filmu
            method: 'DELETE',// usuwa z bazy json film
            dataType: 'JSON'
        }).done(function(){
            btn.parent().remove();
        });

    });
};
removeMovie();

// Zadanie 4.

function updateMovie(){
    ul.on('click', '.updateButton', function(){
        var btn1 = $(this);
        btn1.siblings('h3').addClass('editable');
        btn1.siblings('p').addClass('editable');
        btn1.text('Zatwierdź');
        btn1.addClass('confirmButton'); // ważne żeby to bylo pierwsze
        btn1.removeClass('updateButton');
    });
    ul.on('click', '.confirmButton', function (){
        var btn2 = $(this);
        var titleMovie = $('.get_title').val();
        var descriptionMovie = $('.get_description').val(); // te elementy do pobieranie znow value z inputu
        var newMovie = { // obiekt ktory pojdzie do bazy danych (skopiowany z wyzej)
            title: titleMovie,
            description: descriptionMovie
        };
        $.ajax({
            url: url+'/movies/'+btn2.data('id'), // o id
            method: 'PUT',
            dataType: 'JSON',
            data: newMovie
        }).done(function(response){
            btn2.siblings('h3').text(response.title); // wstawia nowy tytul
            btn2.siblings('p').text(response.description); // wstawiaa nowy opis
            btn2.siblings('h3').removeClass('editable'); // usuwaja ramki
            btn2.siblings('p').removeClass('editable');
            btn2.text('Zmodyfikuj');
            btn2.addClass('updateButton'); // usuwa klase
            btn2.removeClass('confirmButton'); // dodaje
        })
    })

}

updateMovie();
});
