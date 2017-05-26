class Book {
    constructor (title, author) { // constructor z wlasciwosciami title i author i url
        this._title = title;
        this._author = author;
        this._apiUrl = 'http://localhost:3000'; // url potrzebny do ajaxa
        this._ul = $('#books');
    }

    addBook() { // ten ajax dodaje ksiazke do listty nowa
        $.ajax({
            url: this._apiUrl + 'books/add',
            method: 'POST',
            dataType: 'JSON',
            data: {
                title: this._title,
                author: this._author
            }
        }).done(response => { // wkopiowane z getBooks, bez [i]
            let newLiElement = $(`<li data-id=" ${response.id}">`);
            let newSpan = $("<span>");
            newSpan.append(`(${response.author})`); // daje autora o odpowiednim id i nawias na nim
            newLiElement.append(response.title); // tytul w liste
            newLiElement.append(newSpan);
            this._ul.append(newLiElement); // dodaje juz do ul w DOM
        })
    }


    // funkcja ktora pobierze dane z bazy:

    getBooks() {
        $.ajax({
            url: this._apiUrl + '/books',
            method: 'GET',
            dataType: 'JSON'
        }).done(response => { //strzalkowo, ZWRACAC UWAGE NA NAWIAS OKRAGLY-przechodzi nizej.
            console.log(response);
            let booksLength = response.length;
            for (let i=0;i<booksLength;i++) { // pętla po wszystkich ksiazkach, zeby je wrzucic do DOM
                let newLiElement = $(`<li data-id=" ${response[i].id}">`);
                let newSpan = $("<span>");
                newSpan.append(`(${response[i].author})`); // daje autora o odpowiednim id i nawias na nim
                newLiElement.append(response[i].title); // tytul w liste
                newLiElement.append(newSpan);
                this._ul.append(newLiElement); // dodaje juz do ul w DOM
            }

        })
    }


}

export { Book };
