import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory} from 'react-router'
const activeColor = {
    border: '1px solid green'
}
class Main extends React.Component {
    render() {
        return <h1>Witaj na stronie!</h1>
    }
}

class HelloYou extends React.Component {
    render() {
        return <h1>Witaj, {this.props.params.name}</h1>
    }
}

class CheckAge extends React.Component {
    render() {
        if (this.props.params.age >= 18) {
            return <h1>You can vote</h1>
        } else {
            return <h1>You cant vote</h1>
        }

    }
}

class Template extends React.Component {
    render() {
        return <div>
            <h1>App</h1>
            <ul>
                <li>
                    <IndexLink to="/" activeStyle={activeColor}>Home</IndexLink>
                </li>
                <li>
                    <Link to="/hello/Pawel" activeStyle={activeColor}>Hello</Link>
                </li>
                <li>
                    <Link to="/checkage/8" activeStyle={activeColor}>CheckAge</Link>
                </li>
            </ul>
            {this.props.children}
        </div>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={Template}>
                <IndexRoute component={Main}/>
                <Route path="/hello/:name" component={HelloYou}/>
                <Route path="/checkage/:age" component={CheckAge}/>
            </Route>

        </Router>,
        document.getElementById('app')
    );
});
