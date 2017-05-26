import React from 'react';
import ReactDOM from 'react-dom';

class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state ={
            text: 'Hello World'
        }
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({
                text: 'Hi Everyone'
            })
        }, 5000);
    }

    componentWillUpdate() {
        console.log('blabla');
        clearTimeout(this.timeoutId);
    }

    render() {
        return <h1>
            {this.state.text}
        </h1>
    }
}

class App extends React.Component {
    render() {
        return <HelloWorld />
    }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
