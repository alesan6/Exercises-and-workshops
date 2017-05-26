import React from 'react';
import ReactDOM from 'react-dom';

class Test extends React.Component {
    constructor() {
        super();
        this.state = {
            style: {
                backgroundColor: 'green',
                width: '500px',
                height: '200px'
            }
        }
    }

    handleDividerMouseEnter = () => {
        this.setState({
            style: {
                backgroundColor: 'blue',
                width: '500px',
                height: '400px'
            }
        })
    }

    handleDividerMouseLeave = () => {
        this.setState({
            style: {
                backgroundColor: 'green',
                width: '500px',
                height: '200px'
            }
        })
    }

    render() {
        return <div id='divider' style={this.state.style}
        onMouseEnter={this.handleDividerMouseEnter}
        onMouseLeave={this.handleDividerMouseLeave}></div>
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
