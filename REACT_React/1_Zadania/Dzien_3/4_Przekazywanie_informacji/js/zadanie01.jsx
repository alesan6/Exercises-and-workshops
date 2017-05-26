import React from 'react';
import ReactDOM from 'react-dom';

class ClockDateDay extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {this.props.day}
        </div>
    }
}

class ClockDateMonth extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {this.props.month}
        </div>
    }
}

class ClockDateYear extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {this.props.year}
        </div>
    }
}

class ClockDate extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>
            <ClockDateDay day={this.props.datta.getDate()} />
            <ClockDateMonth month={this.props.datta.getMonth()+1} />
            <ClockDateYear year={this.props.datta.getFullYear()}/>
            {/*{this.props.datta}*/}
        </h1>
    }
}

class ClockTimeSecond extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            {this.props.second}
        </div>
    }
}

class ClockTimeMinute extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            {this.props.minute}
        </div>
    }
}

class ClockTimeHour extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
            {this.props.hour}
        </div>
    }
}

class ClockTime extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>
            <ClockTimeHour hour={this.props.timens.getHours()} />
            <ClockTimeMinute minute={this.props.timens.getMinutes()} />
            <ClockTimeSecond second={this.props.timens.getSeconds()} />
            {/*{this.props.timens}*/}
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
            <ClockDate datta={this.state.date} />
            <ClockTime timens={this.state.date} />
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
