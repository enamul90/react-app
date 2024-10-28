
import {useRef} from 'react';

const ChangeClassUseRef = () => {

    let headingRef = useRef();

    const heading = ()=> {

        if(headingRef.className==='text-secondary'){
            headingRef.className = 'text-primary';
        }

        else if(headingRef.className==='text-primary'){
            headingRef.className = 'text-danger';
        }
        else{
            headingRef.className = 'text-secondary';
        }
        
    } 


    return (
        <div className='w-50 mt-5 m-auto p-4 bg-light'>
            <h1 ref={(a)=>headingRef=a} className='text-secondary mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, hic.</h1>
            <button  onClick={heading} className='btn btn-primary'>Change Css Class</button>
        </div>
    );
};


export default ChangeClassUseRef;