import { useState } from "react";


const FormUseState = () => {

    const [data, setData]= useState({
        name: "",
        email: "",
        city: "",
        gender: "",
    })

    const handleChange = (property, value) => {
        setData(pushState=>({
            ...pushState,
            [property]: value
        })
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    }




    return (

        <div className="w-75 bg-light m-auto p-3 mt-5">
            <h1 className="text-center mb-4 ">Form Data</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input onChange={(e)=>{handleChange("name", e.target.value)}} value={data.name} type="text" className="form-control"  placeholder="Name" />
                </div>

                <div className="mb-3">
                    <label  className="form-label">Email</label>
                    <input onChange={(e)=>{handleChange("email", e.target.value)}} value={data.email} type="email" className="form-control"  placeholder="E Mail" />
                </div>

                <div className="mb-3">
                    <label  className="form-label">Select City</label>
                    <select onChange={(e)=>{handleChange("city", e.target.value)}} value={data.city} className="form-select" >
                        <option defaultValue="">Select City</option>
                        <option value="Dhaka">Dhaka</option>
                        <option value="Chittagong">Chittagong</option>
                        <option value="Rajshahi">Rajshahi</option>
                        <option value="Sylhet">Sylhet</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label >Gender</label>
                    <div className="form-check form-check-inline ms-4">
                        <input onChange={()=>handleChange("gender","male")}  checked={data.gender === "male"} className="form-check-input" type="radio"  name="gender" />
                        <label className="form-check-label" >Male</label>
                    </div>

                    <div className="form-check form-check-inline ms-2">
                        <input onChange={()=>handleChange("gender","female")}  checked={data.gender === "female"}  className="form-check-input" type="radio" name="gender" />
                        <label className="form-check-label" >Female</label>
                    </div>
    
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>

            </form>
            
        </div>

    );
};

export default FormUseState;