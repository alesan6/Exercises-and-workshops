// formualrz dodawania
//lista ksiazek
//mozliwosc edycji
//usuwanie
import { Book } from './Book'

$(function(){ //DOMContentLoaded
    var book = new Book(); // tutaj tworzymy instację Books z Book.js
    book.getBooks();
    $('form').on('submit', function(event) { // dodawanie eventu na przycisk submit

        event.preventDefault();
        let title = $('#bookName').val();
        let author = $('#bookAuthor').val();
        let newBook = new Book(title, author); // dodaje nowa ksiazke, nowa instancja
        newBook.addBook(); // doda ksiazke
    })





});
