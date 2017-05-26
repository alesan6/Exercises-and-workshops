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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

//Zadania  z wykładowcą

var weather = ['snow', 'rain', 'sun'];
var [a, , b] = weather;
console.log(a, b);

//
const slider = {
    type: "infinite",
    numberOfItems: 10,
    center: true,
    autoStart: true
};

let {type, autoStart} = slider;
console.log(type, autoStart);

//albo tak:
// let {type, auoStart} = {
//    type: "infinite",
//    numberOfItems: 10,
//    center: true,
//    autoStart: true
// };
// console.log(type, autoStart);

//Zadanie 1.

var arr = ['Jacek', 'Pawel', 'Rudolf'];
let [name1, name2, name3] = arr;

//Zadanie 2.

var generateRandomNumbers = () => {
    var arr1 = [];
    while(arr1.length < 6) {
        var number = Math.floor(Math.random() * 6);
        arr1.push(number);
    }
    return arr1;
}
var nmb = generateRandomNumbers();
let [first, ,third] = nmb;

console.log(nmb);
console.log(first, third);

// Zadanie 4.

function getAnimal() {
    return {
        name: "Mruczek",
        age: 10,
        getVoice: () => "miau miau"
    }
}

let {name: catName, getVoice: catVoice} = getAnimal();
console.log(catName, catVoice()); // catVoice jako metoda z ().


/***/ })
/******/ ]);