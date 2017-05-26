import React from 'react';
import ReactDOM from 'react-dom';

class Weather extends React.Component {
    constructor(){
        super();
        this.state = {
            apiUrl: "https://www.metaweather.com/api/location/search/?query=Warsaw",
            api2Url: "https://www.metaweather.com/api/location/"

        }
    }

    componentDidMount() {
        fetch(this.state.apiUrl, {
            method: 'GET'
        })
            .then(response => response.json())
            .then(responseJson => responseJson[0].woeid)
            .then(woeid => {
                fetch(this.state.api2Url + woeid)
                .then(response => response.json())
                .then(responseJson => {
                    responseJson.consolidated_weather.forEach(element => {
                        console.log(' temperature: ' + element.the_temp
                    + ' air pressure: ' + element.air_pressure
                + ' applicable_date: ' + element.applicable_date);
                    })
                })
            })

    }

    render() {
        return null
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Weather />,
        document.getElementById('app')
    );
});
