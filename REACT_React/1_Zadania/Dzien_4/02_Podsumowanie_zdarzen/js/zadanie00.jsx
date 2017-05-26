import React from 'react';
import ReactDOM from 'react-dom';


class Buttons extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'Klik',
            style: {
                width: 'auto'
            }
        }
    }

    handleButton1Click = () => {
        console.log('Pierwszy przycisk kliknięty');
    }
// ponizej aktualizacja state i tekstu, wczesniej stworzony this.state w constructorze
    handleButton2Click = () => {
        this.setState({
            text: 'Click'
        })
    }

    handleButton3Click = () => {
        this.setState({
            style: {
                width: '300px'
            }
        })
        }

    // w button3 dodany style this.state.style a we wszystkich this.state.text do zmian.
    render() {
        return <div>
            <button id='button1' onClick={this.handleButton1Click}>{this.state.text}</button>
            <button id='button2' onClick={this.handleButton2Click}>{this.state.text}</button>
            <button id='button3' style={this.state.style}
                onClick={this.handleButton3Click}>{this.state.text}</button>
        </div>
    }

}

class App extends React.Component {
    render() {
        return <Buttons />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
