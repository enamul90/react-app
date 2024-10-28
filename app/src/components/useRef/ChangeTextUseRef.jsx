import { useRef } from "react";



const ChangeTextUseRef = () => {

    const defaultText = "Default Text";

    let useData= useRef();
    
    const handleClick = () => {
        useData.current.innerText="New Text";
    }

    const removeText = () => {
        useData.current.innerText=defaultText;
    }
    

    return (
        <div className='text-center p-5 bg-light w-50 m-auto rounded-3'> 
            <h1 ref={useData} >{defaultText}</h1>
            <button onClick={handleClick} className='btn btn-primary'>New</button>
            <button className="btn btn-danger ms-3" onClick={removeText} >Default</button>
        </div>
    );
};

export default ChangeTextUseRef;