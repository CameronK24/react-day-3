import React from 'react';

const CycleData = props => {
    return (
        <div className='display-btn'>
            <button onClick={() => props.previousUser()}> {'<'} Previous</button>
            <button onClick={() => props.nextUser()}>Next {'>'}</button>
        </div>
    )
}

export default CycleData;