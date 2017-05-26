var n= 5;
var z = "";

for (var i=0; i<n; i++) {
   z = ""; // zerowanie kolejnego wiersza, zeby sie gwiazdki nie dodaly
   for (var j=0; j<n; j++) {
     if (i === 0 || i === n-1) {
       z = z + "*";
     } else {
         if (j === 0 || j === n-1) {
            z = z + "*";
         } else {
             z = z + " ";
         }
     }
   }
    console.log(z);
}
// drugi sposób z while:

var i = 0;
var j = 0;

while (i<n) {
   z = "";
   while (j <n) {
     if (i === 0 || i === n-1) {
       z = z + "*";
     } else {
         if (j === 0 || j === n-1) {
            z = z + "*";
         } else {
             z = z + " ";
         }
     }
     j++;
  }
  console.log(z);
  i++;
}
