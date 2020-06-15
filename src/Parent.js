import React from 'react';
import ChildToConsumeContext from './ChildToConsumeContext';
import ChildToConsumeReducer from './ChildToConsumeReducer';

const Parent = (props) => {
    return (
        <div>
            <ChildToConsumeContext/>
            <ChildToConsumeReducer />
        </div>
    )
}

export default Parent;