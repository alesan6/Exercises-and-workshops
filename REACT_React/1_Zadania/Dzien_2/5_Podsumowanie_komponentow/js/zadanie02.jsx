import React from 'react';
import ReactDOM from 'react-dom';
import shopping from './zadanie02';
let prices = shopping.map(element => {
    return element.price * element.count;
})

class ReceiptFooter extends React.Component {
    render () {
        return <tfoot>
            <tr>
                <td>
                    Razem
                </td>
                <td>
                    -
                </td>
                <td>
                    -
                </td>
                <td>
                    {
                        this.props.prices.reduce((prev, curr) => {
                            return prev + curr;
                        })

                    }
                </td>
            </tr>

        </tfoot>
    }
}

class ReceiptItem extends React.Component {
    render () {
        return <tr>
            <td>
                {this.props.name}
            </td>
            <td>
                {this.props.price}
            </td>
            <td>
                {this.props.count}
            </td>
            <td>
                {this.props.price*this.props.count}
            </td>
        </tr>
    }
}

class ReceiptItems extends React.Component {
    render () {
        return <tbody>
        {
            this.props.products.map(element => {
                return <ReceiptItem name={element.name}
                                    price={element.price}
                                    count={element.count} />
            })
        }
        </tbody>
    }
}

class ReceiptHeader extends React.Component {
    render () {
        return <thead>
            <tr>
                <th>
                    Nazwa
                </th>
                <th>
                    Cena
                </th>
                <th>
                    Ilośc
                </th>
                <th>
                    Łączna Cena
                </th>
            </tr>
        </thead>
    }
}

class Receipt extends React.Component {
    render () {
        return <table>
            <ReceiptHeader />
            <ReceiptItems products={this.props.items} />
            <ReceiptFooter prices={this.props.pricing} />
        </table>
        }
    }

class App extends React.Component {
    render () {
        return <Receipt items={shopping} pricing={prices}/>
    }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
