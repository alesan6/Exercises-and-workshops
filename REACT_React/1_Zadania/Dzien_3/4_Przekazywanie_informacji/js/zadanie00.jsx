import React from 'react';
import ReactDOM from 'react-dom';

class ClockDate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>
            {this.props.datta}
        </h1>
    }
}

class ClockTime extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>
            {this.props.timens}
        </h1>
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount() {
        setInterval (()=> {
            this.setState({
                date: new Date()
            });
        }, 1000);
    }

    render() {
        return <div>
            <ClockDate datta={this.state.date.toLocaleDateString()} />
            <ClockTime timens={this.state.date.toLocaleTimeString()} />
        </div>
    }
}

    class App extends React.Component {
        render() {
            return <Clock />
        }
    }
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
