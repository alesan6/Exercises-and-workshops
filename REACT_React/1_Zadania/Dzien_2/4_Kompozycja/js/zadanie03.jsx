import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    render () {
        return <button type='button'>{this.props.text}</button>
    }
}

class Message extends React.Component {
    render () {
        return <div>
            <Button text='tak' />
            <Button text='nie' />
            <p>{this.props.messageText}as</p>
        </div>
    }
}

class App extends React.Component {
    render () {
        return <Message />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <div>
            <App />
        </div>,
        document.getElementById('app')
    );
});
