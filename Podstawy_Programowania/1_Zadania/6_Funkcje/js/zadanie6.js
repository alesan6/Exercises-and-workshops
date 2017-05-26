var tablica = [1, 2, 3];
function sum(tablica)
{
    var sume;
    for (var i=0; i<tablica.length; i++) {
        sume += tablica[i];
    }
    return sume;
}
console.log(sum(tablica));
