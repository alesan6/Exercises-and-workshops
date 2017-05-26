import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, Link, IndexLink, hashHistory} from 'react-router'
const availableServices = [
    'www',
    'shop',
    'SEO'
]
class ServiceInfo extends React.Component {
    render() {
        if (availableServices.indexOf(this.props.params.service) !== -1) {
            return <h1>
                Proponujemy usługę {this.props.params.service}
            </h1>
        } else {
            return <h1>
                <Link to="/">Strona główna </Link>
            </h1>
        }

    }
}

class Main extends React.Component{
    render() {
        return <div>
            Hello World :)
        </div>
    }
}


class Template extends React.Component {
    render() {
        return <div>
            <h1>App</h1>
            <ul>
                <li>
                    <IndexLink to="/" >Home</IndexLink>
                </li>
                <li>
                    <Link to="/hello/Pawel">Hello</Link>
                </li>
                <li>
                    <Link to="/checkage/8">CheckAge</Link>
                </li>
            </ul>
            {this.props.children}
        </div>
    }
}


document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Router history={hashHistory}>
            <Route path="/" component={Main} />
            <Route path="/service/:service" component={ServiceInfo}/>
        </Router>,
        document.getElementById('app')
    );
});
