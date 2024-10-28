import { useRef } from "react";



const ChangeTextUseRef = () => {

    const defaultData = "https://picsum.photos/200/300?grayscale";

    let useData= useRef();
    
    const handleClick = () => {
        useData.current.src="https://picsum.photos/seed/picsum/200/300";
        useData.current.setAttribute('height','300px');
        useData.current.setAttribute('width','500px');
    }

    const removeText = () => {
        useData.current.src=defaultData;
        useData.current.removeAttribute('height');
        useData.current.removeAttribute('width');
    }
    

    return (
        <div className='text-center p-5 bg-body-secondary w-50 m-auto rounded-3'> 
            <button onClick={handleClick} className='btn btn-primary'>New</button>
            <button className="btn btn-danger ms-3" onClick={removeText} >Default</button>
            <br />
            <br />
           <img src={defaultData} ref={useData} />
        </div>
    );
};

export default ChangeTextUseRef;