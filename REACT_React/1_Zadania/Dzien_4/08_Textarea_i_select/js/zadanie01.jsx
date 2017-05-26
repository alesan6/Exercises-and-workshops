import React from 'react';
import ReactDOM from 'react-dom';

class Surprise extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            message: 'Wait for it...'
        }
    }

    componentDidMount() {
        this.counterId = setTimeout(() => {
            this.setState({
                message: 'Surprise!'
            })
        }, 5000);
    }

    componentWillUpdate() {
        clearTimeout(this.counterId);
    }

    render() {
        return <h1>
            {this.state.message}
        </h1>
    }
}

class App extends React.Component {
    render() {
        return <div>
            <Surprise />
        </div>
    }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
