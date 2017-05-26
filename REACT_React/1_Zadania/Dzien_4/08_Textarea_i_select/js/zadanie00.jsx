import React from 'react';
import ReactDOM from 'react-dom';


class TextField extends React.Component {
    constructor() {
        super();
        this.state = {
            len: 0
        }
    }
//    }, () => { callback zdarzenia
    handleTextAreaChange = event => {
        let ev = event;
        this.setState({
            len: ev.target.value.length
        }, () => {
            if (ev.target.value.length === 100) {
                ev.targetev.target.value.substr(0, 100)
            }
        })
    }
    render() {
        return <div>
            <textarea onChange={this.handleTextAreaChange} />
            <span>{this.state.len}</span>
        </div>
    }
}

class App extends React.Component {
    render() {
        return <TextField />
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
