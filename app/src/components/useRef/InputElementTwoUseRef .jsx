import {useRef} from 'react';

const InputElementUseFef = () => {

    let firstName = useRef();
    let lastName = useRef();

    const handleSubmit = () => {
        let fName = firstName.current.value;
        let lName = lastName.current.value;

        alert(fName + " " +lName);
    }


    return (
        <div className='w-50 m-auto mt-5 p-3 bg-light'>
            <input ref={firstName} type="text" placeholder='First Name'className='form-control mb-2' />
            <input ref={lastName} type="text" placeholder='Last Name' className='form-control mb-4'/>
            <button onClick={handleSubmit} className='btn btn-primary'>Click Two</button>
        </div>
    );
};

export default InputElementUseFef;