$(function(){

//Zadanie 1.

    var url = 'http://localhost:3000';
    var ul = $('.cars_list');

    $.ajax({
        url: url+'/cars',
        METHOD: 'GET',
        dataType: 'JSON'
    }).done(function(response){
        console.log(response);
        insertCars(response);
    }).fail(function(error){

    })
    function insertCars (cars){
        var carsLength = cars.length;

        for (var i=0; i<carsLength; i++){
            var newLiElement = $('<li>');
            var newH3 = $('<h3>');
            var newP = $('<p>');
            var DltBtn = $('<button class="delete">Usuń</button>');
            DltBtn.attr('id', cars[i].id);
            var EditBtn = $('<button class="edit">Zmodyfikuj</button>');
            EditBtn.attr('id', cars[i].id);
            newH3.text(cars[i].name);
            newP.text(cars[i].brand);
            newLiElement.append(newH3);
            newLiElement.append(newP);
            newLiElement.append(DltBtn);
            newLiElement.append(EditBtn);
            ul.append(newLiElement);
        }
    }

//Zadanie 2.

    $('#addCar').on('click', function (event){
        event.preventDefault();
        var carName = $('.get_name').val();
        var carBrand = $('.get_brand').val();

        var carNew = {
            name: carName,
            brand: carBrand
        };

        $.ajax({
            url: url+'/cars',
            method: 'POST',
            dataType: 'JSON',
            data: carNew // wskazujemy co wysyłamy - obiekt carNew
        }).done(function(response){
            console.log(response);
            var newLiElement = $('<li>');
            var newH3 = $('<h3>');
            var newP = $('<p>');
            var DltBtn = $('<button class="delete">Usuń</button>');
            DltBtn.attr('id', response.id);
            var EditBtn = $('<button class="edit">Zmodyfikuj</button>');
            EditBtn.attr('id', response.id);
            newH3.text(response.name);
            newP.text(response.brand);
            newLiElement.append(newH3);
            newLiElement.append(newP);
            newLiElement.append(DltBtn);
            newLiElement.append(EditBtn);
            ul.append(newLiElement);
        }).fail(function(error){
            console.log(error);
        })
    })

//Zadanie 3.

    function removeCar(){

        $('ul').on('click', '.delete', function(){
            var btn = $(this);

            $.ajax({
                url: url+'/cars/'+ btn.attr('id'),
                method: 'DELETE',
                dataType: 'JSON'
            }).done(function(response){
                btn.parent().remove();
            }).fail(function(error){
                console.log(error);
            });

        });
    };
    removeCar();

//Zadanie 4.

    function updateCar(){

        $('ul').on('click', '.edit', function(){
            var btnEdit = $(this);
            // console.log(btnEdit);
            btnEdit.siblings('h3').addClass('editable');
            btnEdit.siblings('p').addClass('editable');
            btnEdit.text('Zatwierdź');
            btnEdit.addClass('confirm');
            btnEdit.removeClass('edit');
        });

        $('ul').on('click', '.confirm', function(){
            var btnConfirm = $(this);
            var carName = $('.get_name').val();
            var carBrand = $('.get_brand').val();

            var carNew = {
                name: carName,
                brand: carBrand
            };

            $.ajax({
                url: url+'/cars/' + btnConfirm.attr('id'),
                method: 'PUT',
                dataType: 'JSON',
                data: carNew
            }).done(function(response){
                btnConfirm.siblings('h3').text(response.name);
                btnConfirm.siblings('p').text(response.brand);
                btnConfirm.siblings('h3').removeClass('editable');
                btnConfirm.siblings('p').removeClass('editable');
                btnConfirm.text('Zmodyfikuj');
                btnConfirm.addClass('edit');
                btnConfirm.removeClass('confirm');
            }).fail(function(error){
                console.log(error);
            });
        });

    };
    updateCar();

});
