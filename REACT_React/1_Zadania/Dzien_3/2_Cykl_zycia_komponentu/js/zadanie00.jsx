import React from 'react';
import ReactDOM from 'react-dom';

class Promotion extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            seconds: 5
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(() => {
            // tutaj bedzie kod
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }
    render() {
        if (this.state.seconds > 0) {
            return <h1>
            Do końca promocji zostało {this.state.seconds} sekund
            </h1>;
        } else {
            this.componentWillUnmount();
            console.log('Koniec promocji');
        }
    }
}

class App extends React.Component {
    render() {
        return <div>
            <Promotion />
        </div>
    }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
