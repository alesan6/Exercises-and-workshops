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
