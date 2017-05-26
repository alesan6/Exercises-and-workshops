// function rentCost(days)
// {
//     var days;
//     var costOfRoom;
//     var numbersOfWeeks = Math.floor(days / 7);
//     for (var i=0; i<days; i++) {
//         if (days == 1) {
//             costOfRoom = 200;
//         } else if (days <= 3) {
//             costOfRoom = days *180;
//         } else if (days <= 7) {
//             costOfRoom = days *160;
//         } else if (days >=8) {
//             costOfRoom = (days *150) - (50*numbersOfWeeks);
//         }
//     }
//     return costOfRoom;
//     console.log(costOfRoom);
//     }
//     console.log(rentCost(7));

// lepiej zrobić ze switch, czytelniej. np case 1., jak poniżej:
function rentCost(days)//funckja przyjmuje liczbę dni
{
	var discount = 50;
	var numbersOfWeeks = Math.floor(days / 7);
	var cost = 0;
	switch(days) {
		case 1:
			cost = 200;
			break;//koniec wyjście ze switcha
		case 2://2 dni
		case 3://3 dni
			cost = 180 * days; //mnożymy cenę oraz ilość dni bo tu możemy złapać 2 lub 3 bo taka cena była w zadaniu na te dni
			break;//koniec wyjście ze switcha
		case 4://4 dni
		case 5://5 dni
		case 6://6 dni
			cost = 160 * days;//analogicznie co dla 2 oraz 3
			break;//koniec wyjście ze switcha
		case 7://7 dni
			cost = (160 * days) - discount;//tutaj pojawia się zniżka jako że 1*50 = 50 więc nie musimy mnożyć przez ilość weekendów
			break;//koniec wyjście ze switcha
		default://8 dni oraz wyżej
			cost = (150 * days) - (discount * numbersOfWeeks);//tutaj znowu zniżka ale już trzeba policzyć ile weekendów się mieści w ilości dni
			break;//konic wyjście ze switcha
	}

	return cost;//zwrot tego co ustawi nam switch
}

console.log(rentCost(8));
