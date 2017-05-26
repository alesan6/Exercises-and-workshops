import React from 'react';
import ReactDOM from 'react-dom';

class Sum extends React.Component {
    render () {
        return <h1>
        {this.props.numbers.reduce((prev, next)=> {
            return prev + next;
        })}
        </h1>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Sum numbers={[1,2,3,4,5]} />,
        document.getElementById('app')
    );
});
