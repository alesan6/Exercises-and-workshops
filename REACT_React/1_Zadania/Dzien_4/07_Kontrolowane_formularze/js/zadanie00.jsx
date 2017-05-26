import React from 'react';
import ReactDOM from 'react-dom';

class HelloName extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'Ty'
        }
    }

    handleInputChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }
    render() {
        return <div>
            <h1>Hello {this.state.name}</h1>
            <input type='text' value={this.state.name} onChange={this.handleInputChange} />
        </div>
    }
}

class App extends React.Component {
    render() {
        return <HelloName />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
