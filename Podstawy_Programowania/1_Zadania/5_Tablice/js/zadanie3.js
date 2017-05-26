var arr1 = [4, 55, 17, 22, 1];
var arr2 = [4, 53, 11, 22, 6];

// for (i=0; i<arr1.length; i++) {
//       if (arr1[i]===arr2[i]) {
//          console.log(arr2[i]);
//       }
// }
// działa ale co jeśli liczby w tabliach będą w różnych miejscach??? rozwiznie niżej:
 for (i=0; i<arr1.length; i++) {
     if (arr2.indexOf(arr1[i]) !== -1) {
         console.log(arr1[i]);
     }
 }
