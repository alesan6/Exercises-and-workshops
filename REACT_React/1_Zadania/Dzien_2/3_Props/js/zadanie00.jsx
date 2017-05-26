import React from 'react';
import ReactDOM from 'react-dom';

class Hello extends React.Component {
    render() {
        return <h1> Hello {this.props.name}&nbsp;{this.props.surname}</h1>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Hello name='Aleksander' surname='Wielki' />,
        document.getElementById('app')
    );
});
