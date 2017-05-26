import React from 'react';
import ReactDOM from 'react-dom';

class LifeCycleTester extends React.Component {
    constructor(props) {
        super(props);

    }

    componentWillMount() {
        console.log('komponent będzie zamontowany');
    }

    componentDidMount() {
        console.log('komponent został zamontowany');
    }

    componentWillUpdate() {
        console.log('komponent zostanie zaktualizowany');
    }
    componentDidUpdate() {
        console.log('komponent zostal zaktualizowany');
    }

    render() {
        return <h1>{this.props.text}</h1>
    }
}
document.addEventListener('DOMContentLoaded', function(){
    setTimeout(()=> {
        ReactDOM.render(
            <LifeCycleTester text='Test2' />,
            document.getElementById('app')
        );
    }, 5000)
    ReactDOM.render(
        <LifeCycleTester text='Test1' />,
        document.getElementById('app')
    );
});
