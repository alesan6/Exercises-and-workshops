/**
 * Created by lukers on 18.04.17.
 */
/**
 * Klasa book przyjmuje 2 parametry jeśli ich nie podam to
 * _title oraz _author mają wartość undefined
 */
class Book {
    constructor(title, author) {
        this._title = title;
        this._author = author;
        this._apiUrl = "http://localhost:3000";
        this._ul = $("#books");
    }

    /**
     * Dodaje książkę do bazy danych jeśli wszystko pójdzie OK dodaj ją do drzewa DOM
     */
    addBook() {
        $.ajax({
            url: this._apiUrl + "/books",
            method: "POST",
            dataType: "JSON",
            data: {
                title: this._title,
                author: this._author
            }
        }).done(response => {
            this.createLiElementFromObject(response)
        })
    }

    /**
     * Pobieram wszystkie książki z bazy i jeśli wszystko OK to po kolei dodaje je do drzewa DOM
     */

    getBooks() {
        $.ajax({
            url: this._apiUrl + "/books",
            method: "GET",
            dataType: "JSON"
        }).done(response => {
            let booksLength = response.length;
            for (let i=0; i<booksLength; i++) {
                this.createLiElementFromObject(response[i]);
            }
        })
    }

    /**
     * Tworze nowy element wspólna funkcja której używam w getBooks() oraz addBook()
     * @param Object
     */

    createLiElementFromObject(Object) {
        let newLiElement = $(`<li data-id="${Object.id}">`);
        let newSpan = $("<span>");
        newSpan.append(`(${Object.author})`);
        newLiElement.append(Object.title);
        newLiElement.append(newSpan);
        this._ul.append(newLiElement);
    }

}

export { Book } //exportuje klase aby potem moc uzyc ją w innych plikach