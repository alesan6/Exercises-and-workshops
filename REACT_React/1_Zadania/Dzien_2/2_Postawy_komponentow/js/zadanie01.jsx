import React from 'react';
import ReactDOM from 'react-dom';

class LikeBox extends React.Component {
    render() {
        return <div>
            <span>0  </span>
            <button>Lubię to</button>
        </div>
    }

}
document.addEventListener('DOMContentLoaded', function(){
    ReactDOM.render(
        <LikeBox />,
        document.getElementById('app')
    );
});
