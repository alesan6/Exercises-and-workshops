import React from 'react';
import ReactDOM from 'react-dom';

class Searcher extends React.Component {
    render() {
        return (
            <div>
                <input type='text'/>
                <button type='button'> Wyszukaj </button>
            </div>
        )
    }
}

// function Searcher(){
//     return (
//         <div>
//             <input type='text'/>
//             <button type='button'> Wyszukaj </button>
//         </div>
//     )
// }
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <Searcher />,
        document.getElementById('app')
    );
});
