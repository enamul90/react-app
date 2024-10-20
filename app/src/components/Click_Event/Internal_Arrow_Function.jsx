import React from 'react';

const Internal_Arrow_Function = () => {

    const handleClick = () => {
        alert('Button clicked');
    }

    return (
        <div>
             <button className='btn btn-primary' onClick={handleClick}>Internal_Arrow_Function</button>
        </div>
    );
};

export default Internal_Arrow_Function;