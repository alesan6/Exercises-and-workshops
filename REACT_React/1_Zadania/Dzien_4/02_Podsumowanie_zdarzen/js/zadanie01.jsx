import React from 'react';
import ReactDOM from 'react-dom';

class Bulb extends React.Component {
    constructor() {
        super();
        this.state = {
            style: {
                backgroundColor: 'white',
                width: "100px",
                height: '100px'
            },
            text: 'on'
        }
    }

    handleSwitcherClick = () => {
        switch(this.state.text) {
            case 'on':
                this.setState({
                    text: 'Off',
                    style: {
                        backgroundColor: 'yellow',
                        width: '100px',
                        height: '100px'
                    }
                });
                break;
            default:
                this.setState({
                    text: 'on',
                    style: {
                        backgroundColor: 'white',
                        width: '100px',
                        height: '100px'
                    }
                });
        }
    }
    render() {
        return <div style={this.state.style}>
            <button id='switcher' onClick={this.handleSwitcherClick}>
            {this.state.text}</button>
        </div>
    }
}

class App extends React.Component {
    render() {
        return <Bulb />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
