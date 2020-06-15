import React, { useReducer } from 'react';
import reducer from './Reducer';

const ChildToConsumeReducer = () => {

    let [state, dispatch] =  useReducer(reducer, 1);

    return(
        <div>
            <h2>ChildToConsumeReducer</h2>

            <h3>Value of reducer state is: {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
        </div>
    )
}

export default ChildToConsumeReducer