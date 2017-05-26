function FooBar(n) {
    for (var i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FOOBAR');
        } else if (i % 5 === 0) {
            console.log('Bar');
        } else if (i % 3 === 0) {
            console.log('Foo');
        } else {
            console.log(i);
        }
    }
}
console.log(FooBar(15));
