import { useEffect, useState } from "react";


const CallApiUseEffect = () => {

    const [MoreData , setData] = useState(null)


    useEffect(()=>{

        fetch("https://api.escuelajs.co/api/v1/products")
       .then(response => response.json())
       .then(json => setData(json))
    },[])


    return (
        <div >
        {(


            () => {
                if(MoreData ===null){
                    return <h2>Result is above or equal to 50</h2>
                }
                else{
                    return (
                        MoreData.map((item, i)=>(
                            <div className="w-25 mb-3 p-2 bg-danger m-auto " key={i}>
                                <h3>{item.title}</h3>
                                <img className="img-fluid" src={item.images['2']} alt="" />
                            </div>
                        ))
                    )

                    
                }
            }
        )()}
        </div>
    );
};

export default CallApiUseEffect;