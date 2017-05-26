import React from 'react';
import ReactDOM from 'react-dom';

class AddNumber extends React.Component {
    render () {
        return <h1>
        {parseInt(this.props.numberA) + parseInt(this.props.numberB)}
        </h1>
    }
}
// parseInt bo liczby całkowite musza byc w 14. zamiaast '' {} wtedy bez parseInt
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <AddNumber numberA='2' numberB='3'/>,
        document.getElementById('app')
    );
});
