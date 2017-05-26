import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

class Template extends React.Component {
    render() {
        return <div>
            <h1>App</h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about/us">About</Link>
                </li>
                <li>
                    <Link to="/about/company">About company</Link>
                </li>
            </ul>
            {this.props.children}
        </div>
    }
}

class Main extends React.Component {
    render() {
        return <h1>Witaj na stronie</h1>
    }
}

class AboutUs extends React.Component {
    render() {
        return <p>Troche więcej o nas</p>
    }
}

class AboutCompany extends React.Component {
    render() {
        return <p>Trochę więcej o naszej firmie!</p>
    }
}

class About extends React.Component {
    render() {
        return <div>
            <h2>O NAS</h2>
            {this.props.children}
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path='/' component={Template}>
                <IndexRoute component={Main}/>
                <Route path ='/about' component={About}>
                    <Route path='/about/us' component={AboutUs}/>
                    <Route path='/about/company' component={AboutCompany}/>
                </Route>
            </Route>

        </Router>,
        document.getElementById('app')
    );
});
