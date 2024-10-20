import React from 'react';

const Inline_Regular_Funtion = () => {
    return (
        <div>
            <button className='btn btn-primary' onClick={
                function funtionName (){
                    alert("alert")
                }
            }>Inline Regular Funtion</button>
        </div>
    );
};

export default Inline_Regular_Funtion;