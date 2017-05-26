import React from 'react';
import ReactDOM from 'react-dom';

class TextTyper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text[0]
        }
    }

    componentDidMount() {
        let index =1;
        this.intervalId = setInterval(()=> {
            if (index < this.props.text.length) {
                this.setState({
                    text: this.state.text + this.props.text[index]
                });
                index ++;
            } else {
                clearInterval(this.intervalId);
            };
        }, 1000);
    }
    render() {
        return <h1>
            {this.state.text}
        </h1>

    }
}

class App extends React.Component {
    render() {
        return <div>
            <TextTyper text='Witaj!' />
        </div>
    }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
