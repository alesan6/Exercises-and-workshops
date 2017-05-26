import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', function(){
    // function Chat(props){
    //     return <div className="chat">
    //         <header>
    //             <h1>Chat prywatny</h1>
    //         </header>
    //         <div>
    //             <ul>
    //                 <li>Wpis z chatu 1</li>
    //                 <li>Wpis z chatu 2</li>
    //                 <li>Wpis z chatu 3</li>
    //             </ul>
    //         </div>
    //         <footer>
    //             <input type="text"/>
    //             <button>Wyślij</button>
    //         </footer>
    //     </div>
    // }
    //
    // function App(props){
    //     return <div>
    //         <Chat />
    //     </div>;
    // }

    class ChatHeader extends React.Component {
        render () {
            return <header>
                <h1>Chat prywatny</h1>
            </header>
        }
    }

    class ChatMessages extends React.Component {
        render () {
            return <div>
                <ul>
                    <ChatMessage message='Wpis z chatu 1' />
                    <ChatMessage message='Wpis z chatu 2' />
                    <ChatMessage message='Wpis z chatu 3' />
                </ul>
            </div>
        }
    }

    class ChatMessage extends React.Component {
        render () {
            return <li>{this.props.message}</li>
        }
    }

    class NewChatMessage extends React.Component {
        render () {
            return <footer>
                <input type="text"/>
                <button>Wyślij</button>
            </footer>
        }
    }

    class Chat extends React.Component{
        render(){
            return <div className="chat">
                <ChatHeader />
                <ChatMessages />
                <NewChatMessage />
            </div>
        }
    }

    class App extends React.Component{
        render(){
            return <div>
                <Chat />
            </div>;
        }
    }

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    );
});
