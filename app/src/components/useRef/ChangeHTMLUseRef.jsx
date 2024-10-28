import { useRef } from "react";



const ChangeTextUseRef = () => {


    let useData= useRef();
    
    const handleClick = () => {
        useData.innerHTML="<h2>New Text</h2>";
    }

    const removeText = () => {
        useData.innerHTML= '<h1>hello</h1>';
    }
    

    return (
        <div className='text-center p-5 bg-light w-50 m-auto rounded-3'> 
            <h1 ref={(e)=>useData=e} >hello</h1>
            <button onClick={handleClick} className='btn btn-primary'>New</button>
            <button className="btn btn-danger ms-3" onClick={removeText} >Default</button>
        </div>
    );
};

export default ChangeTextUseRef;