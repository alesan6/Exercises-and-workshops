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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

addEventListener("DOMContentLoaded", function(){

//Zadanie z wykładowcą.

    var cities = ["Kraków", "Olsztyn", "Szczecin", "Ostrów Wielkopolski"];

    function fn(element){

        return element.length;
    }
    var result = cities.map(fn);
    console.log(result);

//Zadanie 1.


    function randomize(param1, param2, callback){
        var result1 = Math.floor(Math.random() * (param2  - param1 +1))+param1;
        if (typeof callback === 'function') {
            callback(result1);
        }
    }
    randomize(0, 100, function(res){
        console.log(res);
    })

//Zadanie 2.

    var animals = ["cat", "shrimp", "giraffe"];

    // animals.forEach(function(element){
    //     console.log(element);
// albo tak:
        function fn(element){
            console.log(element);
        }
        animals.forEach(fn);


//Zadanie 3.

    var years = [1995, 1856, 2014, 1987];
    var currentYear = 2017;

    function age(element){
        return currentYear - element;
    }
    var resultYear = years.map(age);
    console.log(resultYear);

//Zadanie 4.

    var integers = [3,4,6];

    function sum(prev, curr){
        return prev+curr;
    }
    var integersSum = integers.reduce(sum);
    console.log(integersSum);

    function multiply(prev, curr){
        return prev * curr;
    }
    var integersMultiply = integers.reduce(multiply);
    console.log(integersMultiply);

});


/***/ })
/******/ ]);