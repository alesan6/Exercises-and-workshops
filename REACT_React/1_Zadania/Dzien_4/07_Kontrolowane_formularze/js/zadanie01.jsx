import React from 'react';
import ReactDOM from 'react-dom';

class AddTwoNumbers extends React.Component {
constructor() {
    super()
    this.state = {
        a: 0,
        b: 0,
        sum: 0
    }
}

handlerInputAChange = event => {
    this.setState({
        a: parseInt(event.target.value.replace(/\s/g, 0)),
        sum: parseInt(event.target.value) + this.state.b
    })
}

handlerInputBChange = event => {
    this.setState({
        b: parseInt(event.target.value.replace(/\s/g, 0)),
        sum: parseInt(event.target.value) + this.state.a
    })
}

render() {
    return <div>
        <h1>{this.state.sum}</h1>
        <input type="text" value={this.state.a}
            onChange={this.handlerInputAChange}/>
        <input type="text" value={this.state.b}
            onChange={this.handlerInputBChange}/>
    </div>
}
}

class App extends React.Component {
render() {
    return <AddTwoNumbers />
}
}

document.addEventListener('DOMContentLoaded', function(){
ReactDOM.render(
    <App />,
    document.getElementById('app')
);
});
