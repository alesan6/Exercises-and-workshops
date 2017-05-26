import React from 'react';
import ReactDOM from 'react-dom';
import people from './zadanie00'

class PeopleList extends React.Component {
    render() {
    return <li>
        {this.props.name}
    </li>
    }
}

class App extends React.Component {
    render() {
        const list = people.map(person => <PeopleList
                        key={person.pesel} name={person.name} />)

        return <ul>
            {list}
        </ul>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
