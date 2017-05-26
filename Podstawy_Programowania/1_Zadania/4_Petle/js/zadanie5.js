var n = 5;
var z = "";

for ( var i=0; i<=n-1; i++) {
    z = "";
    for (var j=0; j<=n-1; j++) {
        if ((i+j)%2!==0) {
          z = z + "*";
        } else {
            z = z + " ";
        }
    }
    console.log(z);
}
