import React from 'react';
import { useState } from 'react';

const BasicUseState = () => {

    const remove = "রিমুভ করার সীমা ইতিমধ্যেই অতিক্রম করেছে৷"
        const add = "যোগ করার সীমা ইতিমধ্যেই অতিক্রম করেছে৷"

    const [data, setData] = React.useState(5);

    const handleAddNumber = () => {
        if(data>10){
            setData(add);
        }
        else if(data === add){
            setData(add);
        }
        else if(data === remove){
            setData(0);
        }
        else{
            setData(data + 1);
        }
        
    }
    const handleRemoveNumber = () => {
        if (data > 0) {
            setData(data - 1);
        }
        else if(data === add){
            setData(11);
        }
        else{
            setData(remove);
        }
    }

    return (
        <div className='text-center mt-5'>
            <h1>{data}</h1>
            <button onClick={handleRemoveNumber} className='btn btn-dark'>Remove</button>
            <button onClick={handleAddNumber} className='btn btn-primary ms-4'>Add Number</button>
        </div>
    );
};

export default BasicUseState;