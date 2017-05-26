import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const age = parseInt(prompt('Podaj swój wiek'));
    let result;
    if (age < 18) {
        result = <div id="youth">Youth</div>;
    } else {
        result = <div id="adult">Adult</div>;
    }
    ReactDOM.render(
        result,
        document.getElementById('app')
    );
});
