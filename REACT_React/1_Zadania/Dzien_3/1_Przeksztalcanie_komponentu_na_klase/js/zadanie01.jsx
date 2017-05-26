import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    // function CurrencyConverter(props){
    //     const {fromCurr,toCurr,fromVal,convRate} = props;
    //     const toVal = fromVal * convRate;
    //     return <div>
    //         <strong>{fromVal.toFixed(2)}</strong> {fromCurr} =&gt; <strong>{toVal.toFixed(2)}</strong> {toCurr}
    //     </div>
    // }

    class CurrencyConverter extends React.Component {
        constructor(props) {
            super(props);
            this.toVal = this.props.fromVal * this.props.convRate;
        }
        render () {
            const {fromCurr,toCurr,fromVal,convRate} = this.props;
            return <div>
                <strong>{this.props.fromVal.toFixed(2)}</strong>
                 {this.props.fromCurr} =&gt; <strong>{this.toVal.toFixed(2)}</strong> {this.props.toCurr}
            </div>
        }
    }

    // function App(props){
    //     return <div>
    //         <CurrencyConverter fromCurr="PLN" toCurr="EUR" fromVal={250} convRate={0.25} />
    //         <CurrencyConverter fromCurr="EUR" toCurr="EUR" fromVal={120} convRate={4} />
    //         <CurrencyConverter fromCurr="USD" toCurr="EUR" fromVal={1000} convRate={0.94} />
    //     </div>;
    // }

class App extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>
              <CurrencyConverter fromCurr="PLN" toCurr="EUR" fromVal={250} convRate={0.25} />
              <CurrencyConverter fromCurr="EUR" toCurr="EUR" fromVal={120} convRate={4} />
              <CurrencyConverter fromCurr="USD" toCurr="EUR" fromVal={1000} convRate={0.94} />
        </div>
    }
}

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
