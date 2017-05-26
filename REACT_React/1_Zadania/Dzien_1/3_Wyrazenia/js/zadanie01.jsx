import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const year = parseInt(prompt('Podaj rok urodzenia'));
    const actYear = (new Date()).getFullYear();
    ReactDOM.render(
        <p>Twój wiek to {actYear - year}</p>,
        document.getElementById('app')
    );
});
