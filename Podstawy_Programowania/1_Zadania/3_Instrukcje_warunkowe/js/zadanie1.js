var randomNumber = Math.random() * 100;
if (randomNumber > 50) {
   console.log('hura');
} else {
  console.log('liczba mniejsza niz 50');
}

     // krótsze:
console.log((randomNumber > 50) ? 'hura' : 'liczba mniejsza niz 50');
