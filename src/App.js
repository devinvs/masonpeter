import './App.css';

import {useState} from 'react';
import Game from './Game';

const App = () => {
    const [started, setStarted] = useState(false);

    return (
        <div className="App">
            <h1>Mason or Peter?</h1>

            {started? <Game />: <button onClick={() => setStarted(true)}>Begin</button> }
        </div>
    );
}

export default App;
