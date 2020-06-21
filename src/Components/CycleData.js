import React from 'react';

const CycleData = props => {
    return (
        <div className='display-btn'>
            <button id='prev-button' onClick={() => props.previousUser()}> {'<'} Previous</button>
            <button className='special-btn' onClick={() => props.delete()} >Delete</button>
            <button id='next-button' onClick={() => props.nextUser()}>Next {'>'}</button>
        </div>
    )
}

export default CycleData;