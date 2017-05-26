import React from 'react';
import ReactDOM from 'react-dom';

const imageUrl = 'http://www.nice.com/PublishingImages/Career%20images/J---HR_Page-4st-strip-green-hair%20(2).png';
const style = {
    width: '100px',
    height: '100px',
    border: '5px solid',
}

document.addEventListener('DOMContentLoaded', function(){
    let color = prompt('Podaj kolor ramki');
    let colorsArr = ['red', 'blue', 'green'];
    let div;
    if (colorsArr.indexOf(color) !== -1) { // jeśli nie znajdzie indexOf elementu to wyrzuca -1.
        style['borderColor'] = color; //dodaje nowy atrybut do 'style'
        div = <div style = {style}><img src={imageUrl} /></div>; // wrzucamy tutaj obrazek
    } else {
        div = <div>Nieprawidłowy kolor</div>;
    }

    ReactDOM.render(
        // <img src={imageUrl} />,
        div,
        document.getElementById('app')
    );
});
