import React, { useContext } from 'react';
import context from './Context';

const ChildToConsumeContext = () => {
    
    let counterValue = useContext(context)
    
    return (
        <div>
            <h2>ChildToConsumeContext </h2>
            <h4>Counter value is: {counterValue[0]}</h4>

            <button onClick={()=> {counterValue[1](++counterValue[0])}}>
                Increment Context
            </button>
        </div>
    )
}

export default ChildToConsumeContext;