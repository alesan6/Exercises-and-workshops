import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    // function AddNumbers(props){
    //     const sum = props.numberA + props.numberB;
    //     return <div>
    //         {sum}
    //     </div>
    // }

    class AddNumbers extends React.Component {
        constructor(props) {
            super(props);
            this.add = this.props.numberA + this.props.numberB;
        }
        render () {
            return <div>
                {this.add}
            </div>
        }
    }
    // function App(props){
    //     return <div>
    //         <AddNumbers numberA={2} numberB={3} />
    //     </div>;
    // }

    class App extends React.Component {
        constructor(props) {
            super(props);
        }
        render() {
            return <div>
                <AddNumbers numberA={2} numberB={3} />
            </div>
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
