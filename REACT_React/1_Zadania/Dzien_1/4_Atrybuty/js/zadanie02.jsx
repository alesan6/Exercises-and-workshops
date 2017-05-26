import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    //Funkcja generuje pseudolosowe liczby całkowite z zakresu 1-10.
    function genNumber(){
        return Math.round( Math.random() * 9 + 1 );
    }
    //Nie modyfikuj kodu powyżej

    const a = genNumber();
    const b = genNumber();
    const result = prompt(`${a} + ${b} = ?`);
    const correct = a + b;
    let answer;

    if(result == correct) {
        answer = <div style={{backgroundColor: 'green'}}>Odpowiedź poprawna, brawo Ty</div>
    } else {
        answer = <div style={{backgroundColor: 'red'}}>Odpowiedź zła, cienias</div>

    }
    ReactDOM.render(
        answer,
        document.getElementById('app')
    );
});
