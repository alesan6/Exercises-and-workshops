import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const a = parseInt(prompt('Podaj a'));
    const b = parseInt(prompt('Podaj b'));
    const action = prompt('Podaj akcje +, -, *, /');
    function calc(a, b, action) {
        let result;
        switch(action) {
            case "+":
                result = <h1>{a+b}</h1>;
                break;
            case "-":
                result = <h2>{a-b}</h2>;
                break;
            case "*":
                result = <h3>{a*b}</h3>;
                break;
            case "/":
                result = <h4>{a/b}</h4>;
                break;
            default:
                result = 'Błędna akcja';
        }
        return result;
    }
    ReactDOM.render(
        <div> {calc(a, b, action)}</div>,
        document.getElementById('app')
    );
});
