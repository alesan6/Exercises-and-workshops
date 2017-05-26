import React from 'react';
import ReactDOM from 'react-dom';

class Menu extends React.Component {
    render () {
        return <ul>
            <li><a href="/">Strona Główna</a></li>
            <li><a href="/blog">Kontakt</a></li>
            <li><a href="/cennik">Cennik</a></li>
            <li><a href="/contact">Kontakt</a></li>
        </ul>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Menu />,
        document.getElementById('app')
    );
});
