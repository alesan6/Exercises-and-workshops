import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
    handleTestButtonClick() {
        console.log('Działa!')
    }

    render() {
        return <div>
            <button id='testButton' onClick={this.handleTestButtonClick}>
                click!
            </button>
        </div>
    }
}

class App extends React.Component {
    render() {
        return <Test />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
