/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

addEventListener('DOMContentLoaded', function(){

    const PI = 3.14;
    let cztery = 4;

    for (let cztery=0;cztery<3;cztery++){
        console.log('cztery z pętli', cztery); // po kolei wyrzuca 0,1,2
        console.log('CONST', PI); // tutaj ciągle wyrzuca z globalnego const,dopoki
        //nie ma w petli modyfikacji tej zmiennej -wtedy ta zmodyfikowana wyrzuci
    }
    console.log(cztery); // wyrzuca w konsoli wartosc z globalnego leta



(
    function() {
        const PI = 2;
        let cztery = 8;

        console.log('PI IIFE', PI);
        console.log('CZTERY IIFE', cztery);
    }
)();  // tutaj w iife są przesłonięte poprzednie zmienne, wychodzi 2 i 8., gdyby
// nie było w tym zakresie zmiennych to by pobral globalne, 3.14 i 4


{
    const dwa = 8;
    let cztery = 123;

    console.log('blok dwa', dwa); // pokazuje 8.
    console.log('blok cztery', cztery); // pokazuje 123.
}
    // console.log(dwa); // not defined

// Zadanie 3.

    for (var i=1; i<=10; i++){
        console.log(i);
    }
    console.log(i); // wypisuje 11. i zikrementowalo sie do 11 ale nie wykonalo juz tego co petli.

    // for ( let=1; j<=10;j++){
    // }
    // console.log(j); // not defined, let umiera poza pętlą

// Zadanie 5.

(
    function (){
        console.log('hello world')
})();

// Zadanie 6.

(
    function (name){
        console.log(name);

})('marek');


})


/***/ }),
/* 1 */
/***/ (function(module, exports) {

//I. Sprawdź najpierw zasięg let
 {
     //A1 - wypisuję zmienną numbers przed deklaracją
     //Wynik w konsoli to TODO: undefined
     //Dlaczego taki wynik? TODO: wywolanie zmiennej bez jej deklarcji wczesniej
    //  console.log(numbers);

     let numbers = [2,3, 4];
     //A2 - wypisuję zmienną numbers po deklaracji
     //Wynik w konsoli to TODO: 2,3,4
     //Dlaczego taki wynik? TODO: wywoluje po deklaracji
     console.log(numbers);
 }

 //A3 - wypisuję zmienną numbers za blokiem
 //Wynik w konsoli to TODO: undefined
 //Dlaczego taki wynik? TODO: poza bracketami
 // console.log(numbers);



//II. Sprawdź teraz  zasięg const
{
    //A1 - wypisuję zmienną PI przed deklaracją
    //Wynik w konsoli to TODO: undefined, blad w Pi zamiast PI
    //Dlaczego taki wynik? TODO: gdyz bez wczesniejszej deklaracji
    // console.log(Pi);

    const PI = 3.14;
    //A2 - wypisuję zmienną PI po deklaracji
    //Wynik w konsoli to TODO: 3.14
    //Dlaczego taki wynik? TODO: wywoluje po deklaracji
    console.log(PI);
}

//A3 - wypisuję zmienną PI za blokiem
//Wynik w konsoli to TODO: undefined
//Dlaczego taki wynik? TODO: poza bracketem, jest lokalnie zdefiniowany
// console.log(PI);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

let character = "księżniczka";
let timeOfDay = "dzień";
const lover = 'Shrek';

{
    let timeOfDay = "noc";
    let character = "ogrzyca";
    console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
// noc, ogrzyca, --> te przykrywaja poza bracketowe zmienne,  Shrek,
}

console.log("Teraz jest: " + timeOfDay + " i Fiona to: " + character + ", a jej ukochany to: " + lover);
// dzien, ksiezniczka, shrek --> wszystko przyjmuje spoza bracketow


/***/ }),
/* 3 */
/***/ (function(module, exports) {


//TODO: spróbuj zmienić zmienną name nadpisująć ją niżej innym imieniem.
const name = "Agata";
name = 'Ola';
console.log(name); // błąd

//TODO:
//a) spróbuj zmienić zmienną simpleArray nadpisująć ją niżej inną tablicą.
//b) spróbuj dodać nową wartość do tablicy
//c) spróbuj zmienić którąkolwiek wartość z tablicy simpleArray
const simpleArray = [1,2,3,4];
simpleArray = [5, 6, 7, 8]; // błąd
simpleArray.push(5); // [1,2,3,4,5]


//TODO:
//a) spróbuj zmienić zmienną dog nadpisująć ją niżej innym obiektem.
//b) spróbuj zmienić właśność skill obiektu dog
//c) spróbuj dodać nową własność do obiektu dog np. age
const dog = {
    name: "Puszek",
    skill: "killing"
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ })
/******/ ]);