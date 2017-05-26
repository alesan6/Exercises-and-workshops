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

//Zadanie z wykładowcą.

class Vehicle {

}

class Boat extends Vehicle {
    swim(){
        console.log('Boat swimming');
    }
}

class Car extends Vehicle {
    drive(){
        console.log('Car driving');
    }
}

class Plane extends Vehicle {
    fly(){
        console.log('Plane flying');
    }
}

var boat = new Boat();
var car = new Car();
var plane = new Plane();
boat.swim();
car.drive();
plane.fly();

//Zadanie 1.

class Kaczka {
    constructor(type) {
        this._type = type;
    }

    kwacz() {
        console.log('Kwa kwa kwaaa');
    }

    plywaj() {
        console.log('płynę..');
    }

    wyswietl() {
        console.log('Wyglada jak '+ this._type +' kaczka');
    }

    lec() { // Zadanie 4.
        console.log('Lecę bo chcę');
    }
}

var kaczucha = new Kaczka('Zwykla');
kaczucha.kwacz();
kaczucha.plywaj();
kaczucha.wyswietl();

//Zadanie 2.

class DzikaKaczka extends Kaczka {
    constructor(type) {
        super(type);
    }
}

var dzikaKaczucha = new DzikaKaczka('Dzika');
dzikaKaczucha.wyswietl();

//Zadanie 3.

class KrzyzowkaKaczka extends Kaczka {
    constructor(type) {
        super(type);
    }
}

var krzyzoKaczucha = new KrzyzowkaKaczka('Krzyzowka');
krzyzoKaczucha.wyswietl();

//Zadanie 5.

class GumowaKaczka extends Kaczka {
    constructor(type) {
        super(type);
    }

    lec() {
        console.log('Gumowe kaczki nie latają:(');
    }
}

var gumowaKaczka = new GumowaKaczka('gumowa');
gumowaKaczka.wyswietl();
gumowaKaczka.kwacz();
gumowaKaczka.plywaj();
gumowaKaczka.lec();

//Zadanie 6.

class Food {
    constructor(name, protein, carbs, fat, type) {
        this._name = name;
        this._protein = protein;
        this._carbs = carbs;
        this._fat = fat;
        this._type = type;
    }

    getName() {
        return this._name;
    }

    getProtein() {
        return this._protein;
    }

    getCarbs() {
        return this._carbs;
    }

    getFat() {
        return this._fat;
    }

    calcCalorie() {
        return this._protein * 4 + this._carbs * 4 + this._fat * 9;
    }

    print() {
        var newLi = $('<li>');
        var ul = $('#product');
        newLi.append(this._type + ' : ' + this._name + ' protein: ' + this._protein+ ' carbs: '+ this._carbs + ' fat: ' + this._fat + ' calories: ' + this.calcCalorie());
        ul.append(newLi);
    }
}

class FastFood extends Food {}

class FatFreeFood extends Food {}

$('.button').on('click', function() {
    var name = $('.name').val();
    var protein = $('.protein').val();
    var carbs = $('.carbs').val();
    var fat = $('.fat').val();
    var food = new Food(name, protein, carbs, fat, ''); // nowa instancja obiektu Food
    var calories = food.calcCalorie();
    if (calories >= 250) {
        var ff = new FastFood(name, protein, carbs, fat, 'FastFood'); // nowa instancja clasy FastFood kiedy calorie wieksze niz 250
        ff.print();
    } else {
        var fff = new FatFreeFood(name, protein, carbs, fat, 'FatFreeFood'); // nowa instancja clasy FastFreeFood
        fff.print();
    }
})


/***/ })
/******/ ]);