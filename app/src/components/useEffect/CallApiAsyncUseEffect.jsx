import { useState, useEffect } from "react";


const CallApiAsyncUseEffect = () => {
    const [cashData, setCashData]=useState([])


    useEffect(()=>{

            (
                async () => {
                    const response = await fetch("https://dummyjson.com/users");
                    const data = await response.json();
                    setCashData(data.users);
                }

            )()

    })



    return (
        <div className="container bg-light" >

            <h1 className="text-center">Call Api With Async Await</h1>

            <div className="row">
                    
                {
                    cashData.map((item, index) => (
                        <div key={index} className="card col-3 p-2 g-2">
                            <h6> Name: {item.firstName} {item.lastName}</h6>
                            <p> Email: {item.email}</p>
                            <img className="img-fluid" src={item.image} alt="" />
                        </div>
                    ))
                }
            </div>


            
        </div>

    );
};

export default CallApiAsyncUseEffect;