import {useRef} from 'react';

const InputElementUseFef = () => {

    let firstName,lastName = useRef();


    const handleSubmit = () => {
        let fName = firstName.value;
        let lName = lastName.value;


        alert(fName, lName);
    }


    return (
        <div className='w-50 m-auto mt-5 p-3 bg-light'>
            <input ref={(a)=>firstName=a} type="text" placeholder='First Name'className='form-control mb-2' />
            <input ref={(b)=>lastName=b} type="text" placeholder='Last Name' className='form-control mb-4'/>
            <button onClick={handleSubmit} className='btn btn-primary'>Click One</button>
        </div>
    );
};

export default InputElementUseFef;