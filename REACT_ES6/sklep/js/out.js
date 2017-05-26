/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
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




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Book__ = __webpack_require__(0);
// formualrz dodawania
//lista ksiazek
//mozliwosc edycji
//usuwanie


$(function(){ //DOMContentLoaded
    var book = new __WEBPACK_IMPORTED_MODULE_0__Book__["a" /* Book */](); // tutaj tworzymy instację Books z Book.js
    book.getBooks();
    $('form').on('submit', function(event) { // dodawanie eventu na przycisk submit

        event.preventDefault();
        let title = $('#bookName').val();
        let author = $('#bookAuthor').val();
        let newBook = new __WEBPACK_IMPORTED_MODULE_0__Book__["a" /* Book */](title, author); // dodaje nowa ksiazke, nowa instancja
        newBook.addBook(); // doda ksiazke
    })





});


/***/ })
/******/ ]);