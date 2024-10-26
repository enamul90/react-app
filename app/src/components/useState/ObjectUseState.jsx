import React from 'react';
import { useState } from 'react';

const ObjectUseState = () => {

    let [data, setData]=useState([
        {   name:"Enamul Firoz",
            age:27,
            city:"Barishal"
        }
    ])


    return (
        <div className='text-center'>
            <h1>{data['0'].name}</h1>
            <h1>{data['0'].age}</h1>
            <h1>{data['0'].city}</h1>
        </div>
    );
};

export default ObjectUseState;