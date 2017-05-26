import React from 'react';
import ReactDOM from 'react-dom';



class Invites extends React.Component {
    render() {
        return <li>
            {this.props.name}
        </li>

    }
}

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            people: []
        }

    }
    
    handleInviterClick = () => {
       let newPerson = prompt("Podaj imię i nazwisko");
       var test = this.state.people.slice()
       test.push(newPerson)
       this.setState({
           people: test
       })
       console.log(this.state);
   }

    render() {
        return <div>
            <ul>
            {
                this.state.people.map((person, index) => <Invites key={index} name={person} />)
            }

            </ul>
            <button id='inviter' onClick={this.handleInviterClick}>Nowy</button>
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
