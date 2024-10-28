import {useRef, useState} from 'react';

const CachingUseRef = () => {
    let cache = useRef(null);
    let showData = useRef(null);
    const [card, setCard]=useState([])

    console.log(cache.current);

    const CardHandel = () => {
        
        setCard(cache.current || [])


    }

    const handleShowData = () => {
        showData.current.innerText = JSON.stringify(cache.current);
    }

    const fetchData = async () => {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        cache.current = data;
    };

    return (
        <div className='mt-5 w-75 m-auto bg-light p-4 text-center'>

            
            <button onClick={fetchData} className='btn btn-outline-dark'>Call API</button>
            <button onClick={handleShowData} className='btn btn-dark ms-4'>Show Data</button>
            <button onClick={CardHandel} className='btn btn-dark ms-4'>Show Data With Card</button>

            <div className='row mt-5' >
                {
                    card.map((product, index) => (
                        <div key={index} className='col-md-4'>
                            <div className='card'>
                                <img className='card-img-top' src={product.image} alt={product.title} />
                                <div className='card-body'>
                                    <h5 className='card-title'>{product.title}</h5>
                                    <p className='card-text'>Price: {product.price}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <p className='mt-4' ref={showData}></p>


        </div>

    );
};

export default CachingUseRef;