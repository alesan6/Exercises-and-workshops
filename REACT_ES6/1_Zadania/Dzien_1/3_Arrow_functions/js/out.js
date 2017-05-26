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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

addEventListener("DOMContentLoaded", function(){

//Zadanie 1.

let hello = () => {
    console.log('hello world');

};
hello();


//Zadanie 2.

let multiply = (number) => {
    return number*2;
};
console.log(multiply(4));

//Zadanie 3.

let maxVal = (number1, number2) => {
    if (number1>number2){
        return number1;
    } return number2;
};
console.log(maxVal(7, 5));

//Zadanie 4.

var arr1 = [2,3,1,6,100,49,5,7,8,9];

let getSecondMaxNumber = (array) => {
     var second = array.sort(function(a,b){return b-a})[1];
     return second;
};

console.log(getSecondMaxNumber(arr1));

//Zadanie 5.
var x = 'Buggy';
( function(param) {

    return param;

})(x);

//Zadanie 6.

let fn = (a=10) => {
    let count = 0;
    let hell = setInterval(() => {
        count += 1;
        console.log('hello '+ count);
    if (count >= a) {
        clearInterval(hell);
        };
    },2000);
}
fn(8);


});


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// var Students = function(students) {
// 	this.names = students;
//   	this.numberOfLetters = [];
// };
//
//
// Students.prototype.countLetters = function() {
//
//
// }
//
// var students = new Students(["Ania", "Kamil", "Mariusz"]);
// students.countLetters();
// console.log(students.numberOfLetters);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const App = function() {
  this.websites = ['onet', 'wp', 'facebook'];
  this.links = [];
}


App.prototype.generateLinks = function() {
this.websites.forEach(e => {
  this.links.push('https://www.' + e + '.com');
});
}


let app = new App();
app.generateLinks();
console.log(app.links)

let aElement1= $('.menu').find('a').first();
let aElement2= $('.menu').find('a').eq(1);
let aElement3= $('.menu').find('a').last();
aElement1.attr('href', app.links[0]);
aElement2.attr('href', app.links[1]);
aElement3.attr('href', app.links[2]);


/***/ }),
/* 3 */
/***/ (function(module, exports) {

const dog = {
    type: "Mammal",
    name: "",
    setName: function(newName) { // zamiast strzałkowej normalna funkcja
        this.name = newName;
    }
}

dog.setName("Reksio");
console.log(dog.name);

// zadanie 8
// const dog = {
//     type: "Mammal",
//     name: "",
//     setName: (newName) => {
//         dog.name = newName;
//     }
// }
//
// dog.setName("Reksio");
// console.log(dog.name);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

$(function(){
  var slide = $('div').find('span');
  const list = $('div').find('ul');
  list.hide();
  slide.on('mouseenter', function() {
    var slider = $(this);
    var show = () => slider.next().slideDown();
    show();
  });
  slide.on('mouseleave', function(){
    list.slideUp();
  });
});


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ })
/******/ ]);