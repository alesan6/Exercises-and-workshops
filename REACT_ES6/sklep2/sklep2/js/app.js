import { Book } from './Book' //importuje klase Book

$(function() {
    var book = new Book();// Tworze nową instancję obiektu Book
    book.getBooks();// Pobieram sobie wszystkie ksiązki i dodaje do drzewa DOM (mowi o tym ciało metody)
    $("form").on("submit", function(event) {
        event.preventDefault();// Blokuje przeladowanie strony po kliknieciu w przycisk submit
        let title = $("#bookName").val();// Pobieram dane z pola bookName
        let author = $("#bookAuthor").val();// Pobieram dane z pola bookAuthor
        let newBook = new Book(title, author);// Tworze nową instancję klasy Book tym raze z parametrami
        newBook.addBook();// Dodaję książkę do bazy danych i dodaje do drzewa DOM (mowi o tym ciało metody)
    })
});