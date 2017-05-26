import React from 'react';
import ReactDOM from 'react-dom';

class CarsDBManager extends React.Component {
    constructor() {
        super()
        this.state = {
            cars: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/cars')
            .then(response => response.json())
            .then(responseJson => {
                this.setState({
                    cars: responseJson
                })
            })
    }

    handleButtonClick = (event) => {
        fetch('http://localhost:3000/cars/' + event.target.dataset.id, {
            method: 'DELETE',

        })
        .then(()=> {
            fetch('http://localhost:3000/cars')
                .then(response => response.json())
                .then(responseJson => {
                    this.setState({
                        cars: responseJson
                    })
                })
        })
    }

    render() {
        return <div>
            <ul>
                {
                    this.state.cars.map(element => {
                        return <li key={element.id}>
                            Brand: {element.brand}<br/>
                            Name: {element.name}<br/>
                            <button data-id={element.id} onClick={this.handleButtonClick} >Sprzedany</button>
                        </li>
                    })
                }
            </ul>
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <CarsDBManager />,
        document.getElementById('app')
    );
});
