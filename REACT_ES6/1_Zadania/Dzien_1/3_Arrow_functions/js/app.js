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
