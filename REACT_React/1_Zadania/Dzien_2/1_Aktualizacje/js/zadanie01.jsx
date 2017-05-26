import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    let godzina = (new Date()).toLocaleTimeString(); // godzina
    function showTime() {
        ReactDOM.render(
            <div>
                <span>Jest godzina:</span>
                <h1>{ godzina }</h1>
                <span>{ (new Date()).toLocaleDateString() }</span>
            </div>,
            document.getElementById('app')
        );
    }

    setInterval(() => {
        godzina = (new Date()).toLocaleTimeString();
        showTime();
    }, 1000);

});
