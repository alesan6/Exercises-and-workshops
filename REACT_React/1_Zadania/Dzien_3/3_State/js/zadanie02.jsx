import React from 'react';
import ReactDOM from 'react-dom';

class TextTyper extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: this.props.text[0]
        }
    }
// poniżej zrobi dla reversed=true
//substr obcina ostatnia czesc stringa
    componentDidMount() {
        if (this.props.reversed) {
            this.setState({
                text: this.props.text
            });
            let index = this.props.text.length

            this.intervalId = setInterval(()=> {
                if (index =>0 ) {
                    this.setState({
                        text: this.state.text.substr(0, index)
                    });
                    index--;
                } else {
                    clearInterval(this.intervalId);
                }
            }, 1000)
        } else {

//ponizej zrobi dla reversed=false
            let index =1;
            this.intervalId = setInterval(()=> {
                if (index < this.props.text.length) {
                    this.setState({
                        text: this.state.text + this.props.text[index]
                    });
                    index ++;
                } else {
                    clearInterval(this.intervalId);
                };
            }, 1000)
        }
    render() {
        return <h1>
            {this.state.text}
        </h1>

    }
    }
}

class App extends React.Component {
    render() {
        return <div>
            <TextTyper text='Witaj!' reversed={true} />
        </div>
    }
}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});


// ponziej od Domi::
import React from 'react';
import ReactDOM from 'react-dom';

class TextTyper extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: this.props.text[0]
    }
  }

componentDidMount() {
  if (this.props.reversed) {
    this.setState({
      text: this.props.text
    });
    let index = this.props.text.length

    this.intervalId = setInterval(()=>{
      if(index=>0) {
        this.setState({
          text: this.state.text.slice(0, -1)
          //albo substr(0, index)
        });
        index--;
      } else {
        clearInterval(this.intervalId);
      }
    }, 1000)
  } else {
  let index = 1;
  this.intervalId = setInterval(() => {
    if (index< this.props.text.length) {
      this.setState({
        text: this.state.text + this.props.text[index]
      });
      index++;
    } else {
      clearInterval(this.intervalId);
    }
  }, 1000);
}
}

  render() {
    return <h1>{this.state.text}</h1>
  }
}

class App extends React.Component {
  render() {
    return <TextTyper text="Witaj!" reversed={true}/>
  }
}

document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <App />,
        document.getElementById('app')
    );
});
