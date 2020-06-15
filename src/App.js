import React, {useState} from 'react';

import './App.css';
import Parent from './Parent';
import Context from './Context';

function App() {
  let countState = useState(1) //[count, setCount]

  return (
    <div className="App">
     
      <Context.Provider value={countState}>
      <div>
        <Parent />
      </div>
    </Context.Provider>
      
    </div>
  );
}

export default App;
