import {useRef} from 'react';

const ChangeMutableUseRef = () => {

    const mutableData = useRef(0);

    const handleClick = () => {
        let data = mutableData.current++;
        console.log(data);
    }

    return (
        <div className='m-auto  w-50 mt-5'>
            
            <button onClick={handleClick} className='btn btn-dark'>Add data</button>
        </div>
    );
};

export default ChangeMutableUseRef;