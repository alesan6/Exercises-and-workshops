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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by lukers on 18.04.17.
 */
var Book = function () {
    function Book(title, author) {
        _classCallCheck(this, Book);

        this._title = title;
        this._author = author;
        this._apiUrl = "http://localhost:3000";
        this._ul = $("#books");
    }

    _createClass(Book, [{
        key: "addBook",
        value: function addBook() {
            var _this = this;

            $.ajax({
                url: this._apiUrl + "/books",
                method: "POST",
                dataType: "JSON",
                data: {
                    title: this._title,
                    author: this._author
                }
            }).done(function (response) {
                _this.createLiElementFromObject(response);
            });
        }
    }, {
        key: "getBooks",
        value: function getBooks() {
            var _this2 = this;

            $.ajax({
                url: this._apiUrl + "/books",
                method: "GET",
                dataType: "JSON"
            }).done(function (response) {
                var booksLength = response.length;
                for (var i = 0; i < booksLength; i++) {
                    _this2.createLiElementFromObject(response[i]);
                }
            });
        }
    }, {
        key: "createLiElementFromObject",
        value: function createLiElementFromObject(Object) {
            var newLiElement = $("<li data-id=\"" + Object.id + "\">");
            var newSpan = $("<span>");
            newSpan.append("(" + Object.author + ")");
            newLiElement.append(Object.title);
            newLiElement.append(newSpan);
            this._ul.append(newLiElement);
        }
    }]);

    return Book;
}();

exports.Book = Book;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Book = __webpack_require__(0);

$(function () {
    var book = new _Book.Book();
    book.getBooks();
    $("form").on("submit", function (event) {
        event.preventDefault();
        var title = $("#bookName").val();
        var author = $("#bookAuthor").val();
        var newBook = new _Book.Book(title, author);
        newBook.addBook();
    });
});

/***/ })
/******/ ]);