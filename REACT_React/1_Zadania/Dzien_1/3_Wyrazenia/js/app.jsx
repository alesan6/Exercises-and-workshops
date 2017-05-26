// import Zadanie from './zadanie00.jsx'
// import Zadanie1 from './zadanie01.jsx'
// import Zadanie2 from './zadanie02.js'
// import Zadanie3 from './zadanie03.jsx'
// import Zadanie4 from './zadanie04.jsx'
import Zadanie5 from './zadanie05.js'
// import Zadanie6 from './zadanie06.jsx'

import React from 'react'
import ReactDOM from 'react-dom'


// Zadanie 02.
addEventListener('DOMContentLoaded', function(){
    // ReactDOM.render(
    //     <div>
    //         {Zadanie2.title +' '+ Zadanie2.name +' '+ Zadanie2.surname +' '+
    //         Zadanie2.age}
    //     </div>,
    //     document.getElementById('app')
    // )
    ReactDOM.render(
        <div>
            <p>Ilośc zwierzaków {Zadanie5.length}</p>
            <p>Są to: {Zadanie5.join(', ')}</p>
        </div>,
        document.getElementById('app')
    );

});
