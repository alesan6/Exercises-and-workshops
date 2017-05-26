import React from 'react';
import ReactDOM from 'react-dom';


class Test extends React.Component {
    constructor() {
        super();
        this.style = {
            width: '100px',
            height: '100px',
            border: '3px solid navy'
        }
    }

    handleTestDivClick() {
        console.log('Klik tlak');
    }

    handleTestDivMouseEnter() {
        console.log('Wjazd');
    }

    handleTestDivMouseLeave() {
        console.log('Wyjazd');
    }

    render() {
        return <div id='testDiv' style={this.style}
                onClick={this.handleTestDivClick}
                onMouseEnter={this.handleTestDivMouseEnter}
                onMouseLeave={this.handleTestDivMouseLeave}>
                </div>

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
