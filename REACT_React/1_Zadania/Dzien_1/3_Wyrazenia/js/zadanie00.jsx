import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    const a = parseInt(prompt('Podaj a'));
    const b = parseInt(prompt('Podaj b'));
    ReactDOM.render(
        <p>{a + b}</p>,
        document.getElementById('app')
    );
});
