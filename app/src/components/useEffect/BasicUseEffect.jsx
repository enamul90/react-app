
import { useEffect } from "react";

const BasicUseEffect = () => {

    useEffect(()=>{
        console.log("Component Mounted");
    },[])


    return (
        <div className="w-75 bg-light m-auto text-center p-5 mt-5">

            <h1 className="mb-3">Hello World!</h1>
            <button  className="btn btn-dark">Click Hare</button>
        </div>
    );
};

export default BasicUseEffect;