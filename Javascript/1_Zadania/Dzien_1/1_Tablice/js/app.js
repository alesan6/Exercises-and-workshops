// Zadanie z wykładowcą - znajdź różnicę

function distFromAverage(givenArr) {
    var sum = 0;
    var average = 0;
    for (var i=0; i<givenArr.length; i++) {
        sum = sum + givenArr[i];
    }
    average = sum/givenArr.length;

    var resultArr = [];
    var distance = 0;
    for (var j=0; j<givenArr.length; j++) {
        distance = givenArr[j] - average;
        resultArr.push(Math.abs(distance));
    }
    return resultArr;
    // console.log(average);
}



var firstArr= [1,2,3,4,5,6,7]; // 4
var secondArr = [1,1,1,1]; // 1
var thirdArr = [2,8,3,7]; // 5
var ultimateArr = [2,6,9,8,10,1]; // 6
distFromAverage(firstArr); // [3,2,1,0,1,2,3]
distFromAverage(secondArr); // [0,0,0,0]
distFromAverage(thirdArr); // [3,3,2,2]
console.log(distFromAverage(ultimateArr)); // [4,0,3,2,6,5]

// Zadanie 1.
var fruitArr = ["banana", "pomegranate", "orange", "pomelo"];
console.log(fruitArr[0]);
console.log(fruitArr[fruitArr.length-1]);
for (var i=0; i<fruitArr.length; i++) {
    console.log(fruitArr[i]);
}

// Zadanie 2.
function createArray(number) {
    var newArray = [];

    for (var counter = 1; counter <=number; counter++) {
        newArray.push(counter);
    }

    return newArray;
}

console.log("tablica z liczbami do 6 = " + createArray(6));
console.log("tablica z liczbami do 1 = " + createArray(1));
console.log("Test dla liczby ujemnej (powinna być pusta tablica) " + createArray(-6));
console.log("Test dla zera (powinna być pusta tablica) " + createArray(0));

// Zadanie 3.
function printTable(array) {
    for (var i=0; i<array.length; i++) {
        console.log(array[i]);
    }
}
var testArr = [1,3,4];
var test2Arr = [2,5,7];
printTable(testArr);

// Zadanie 4.
var multi=1;
function multiply(array) {
    for (var i=0; i<array.length; i++) {
        multi = multi * array[i];
    }
    return multi;
}
var multiArr = [2, 3, 2, 3];
console.log(multiply(multiArr));

// Zadanie 5.
var arrEven =[];
var avarage =0;
var result =0;
var modulo;
function getEvenAvarage(array) {
    for (var i=0; i<array.length; i++) {
        modulo =array[i]%2;
        if (modulo === 0) {
            arrEven.push(array[i]);
        }
    }
    for (var j=0; j<arrEven.length; j++) {
        avarage= avarage + arrEven[j];
    }
    result =avarage/arrEven.length;
    if (arrEven.length == 0) {
        result = 'null';
    }
    return result;
}
var testEvenArr = [3,2,1,2,4];
console.log(getEvenAvarage(testEvenArr));

//KRÓCEJ:
//
// function getEvenAverage(array){
//   var evenNumber = [];
//   for (var i=0; i<array.length; i++) {
//     if (array[i]%2 === 0) {
//       evenNumber.push(array[i]);
//     }
//   }
//
//   var result = 0;
//   for (var j=0; j<evenNumber.length; j++) {
//     result += evenNumber[j];
//  }
//  if(evenNumber.length == 0){
//    return null;
//  }else {
//    return result/evenNumber.length;
//  }
// }
// console.log(getEvenAverage([1,2,3,4,5,6,7]));
//  // 4
// console.log(getEvenAverage([1,1,1,1])); // null
// console.log(getEvenAverage([2,8,3,7,4])); // 4.6666

// Zadanie 6.
function sortArray(a, b) {
    return a - b
}

var sortedArr = [145,11,3,64,4,6,10];

sortedArr.sort(sortArray)
console.log(sortedArr);

// Zadanie 7.
// var sumArr = [];
// function addArrays(array1, array2) {
//     for (var i=0;i<=array1.length;i++) {
//         for (var j=0;j<=array2.length;j++) {
//             if (i=j) {
//             // && (array1.length==array2.length) {
//                 sumArr.push(array1[i-1]+array2[j-1]);
//             }
//         }
//     }
//     return sumArr;
// }
// addArrays([8,3,22], [1,3,2]);
// console.log(sumArr);
// NIE WIEM JAK NADMIAROWE PUSHOWAC
// function addArrays(arr7, arr8) {
//     var arrResult9 = [];
//     var longer = 0;
//     if (arr7.length > arr8.length) {
//         longer = arr7.length;
//     } else {
//         longer = arr8.length;
//     }
//
//     for (var i = 0, j = 0; i < longer, j < longer; i++, j++) {
//         if (arr7[i] == undefined) {
//             arr7[i] = 0;
//         }
//         if (arr8[j] == undefined) {
//             arr8[i] = 0;
//         }
//         arrResult9.push(arr7[i] + arr8[j]);
//     }
//     return arrResult9;
// }
//
// console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17])); //=> [5,9,7,10,12,17]
// console.log(addArrays([8, 3, 22], [1, 3, 2])); //=> [9,6,24]
// console.log(addArrays([2, 3, 1, 5, 3, 5], [3, 1, 76, 1]));
//=> [5,4,77,6,3,5]

// druga opcja:
function addArrays(a,b) {
  var joinArray = [];

  for (var i = 0; i < Math.max(a.length, b.length); i++) {
        joinArray.push((a[i] || 0) + (b[i] || 0));
      }
  console.log(joinArray);
}
console.log(addArrays([4, 0, 1, 3, 4], [1, 9, 6, 7, 8, 17]));
