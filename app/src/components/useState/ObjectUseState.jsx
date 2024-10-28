
import { useState } from 'react';

const ObjectUseState = () => {

    const [data, setData]=useState(
        {   name:"Enamul Firoz",
            age:27,
            city:"Barishal"
        }
    );

    // Update the state
    const updateData = () => {

        setData(
            OldData =>({
                ...OldData,
                age:37,
            })
        )
    }


    return (
        <div className='text-center bg-body-tertiary p-5'>
            <h1>{data.name}</h1>
            <h1 >{data.age}</h1>
            <h1>{data.city}</h1>

            <hr />

            <div className='bg-light'>
                <button className='btn btn-dark' onClick={ updateData} >Update Data</button>
            </div>
        </div>
    );
};

export default ObjectUseState;