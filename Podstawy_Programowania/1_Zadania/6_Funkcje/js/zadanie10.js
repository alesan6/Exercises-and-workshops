function calculateTip(amount, raiting)
{
    var amount;
    var raiting;
    var tip;
    if (raiting === 'Bardzo dobra obsluga') {
        tip = amount*0.25; // tu mi wylicza dokładną kwotę napiwku od sumy,
    } else if (raiting === 'Dobra obsluga') {
        tip = amount*0.20;
    } else if (raiting === 'Srednia obsluga') {
        tip = amount*0.15;
    } else if (raiting === 'Zla obsluga') {
        tip = amount*0.10;
    } else {
        console.log('opis nieczytelny');
    }
    return tip;
}
console.log(calculateTip(200, 'Dobra obsluga'));
// poniżej metoda ze switchem:

 // // function calculateTip(amount, raiting)//Informujemy funkcję że będziemy podawać 2 paramtry
 // {
 // 	var toReturn = "";//tutaj zapiszemy string który zwróci nam funkcja
 // 	switch (raiting) {//podobnie jak w funkcji do zadania 6 - poza tym przejrzyściej niż ify
 // 		case "Bardzo dobra obsługa":
 // 			toReturn = 25;
 // 			break;
 // 		case "Dobra obsługa":
 // 			toReturn = 20;
 // 			break;
 // 		case "Średnia obsłgua":
 // 			toReturn = 15;
 // 			break;
 // 		case "Zła obsłgua":
 // 			toReturn = 10;
 // 			break;
 // 		default:
 // 			toReturn = "Opis nieczytelny";
 // 	}
 //
 // 	return toReturn;
 // }
 //
 // console.log(calculateTip(100, "Bardzo dobra obsługa"));
