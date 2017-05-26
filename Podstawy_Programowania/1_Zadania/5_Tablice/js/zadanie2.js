var arr = [];
for (var i=0; i<10; i++) {
    arr[i]=Math.floor(Math.random() * (60 - 1)); // lub arr.push()
}
for (var i=0; i<10; i++) {
    if (arr[i]%2!==0) {
       arr[i] = arr[i]+1;
    }
}
for (var i=0; i<10; i++) {
    console.log(arr[i]);
}
