import { useState, useEffect } from "react";


const CallApiAsyncUseEffect = () => {
    const [cashData, setCashData]=useState([])


    useEffect(()=>{

            (
                async () => {
                    const response = await fetch("https://api.escuelajs.co/api/v1/products");
                    const data = await response.json();
                    setCashData(data);
                }

            )()

    })



    return (
        <div >

            {
                cashData.map((item, index) => (
                    <div key={index} className="mb-5">
                        <h1>{item.title}</h1>
                        <h1>{item.price}</h1>
                    </div>
                ))
            }

            
        </div>

    );
};

export default CallApiAsyncUseEffect;