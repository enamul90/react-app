
import { useState } from "react";



const BasicUseState = () => {

    const [data, SetData]=useState([])
    const [id, setId]=useState(1)

    console.log(data)

    const getFromData = (Event)=>{
        Event.preventDefault();
        let user = Event.target.user.value;
        let department = Event.target.department.value;
        let detail = Event.target.detail.value;

        let newData = [...data, {user, department, detail, id:id}];
        setId(id+1)
        SetData(newData);
        Event.target.reset();

    }

    const removeData = (index) => {
        let newData = [...data];
        newData.splice(index, 1);
        SetData(newData);
    }

    return (

        <div>
            <form className="w-50 m-auto mt-3" onSubmit={getFromData}>
                <input className="form-control mb-2 " type="text" placeholder="User Name" name="user" />
                <input className="form-control mb-2" type="text" placeholder="Department" name="department" />
                <textarea className="form-control mb-3" name="detail" placeholder="Work Detail" rows={3} />
                <button className="btn btn-primary" type="submit">Submit</button>
            </form>

            <div className="mt-5">
                {
                    data.sort((a,b)=>b.id-a.id).map((item, index)=>(

                        <div className="w-50 m-auto bg-light p-3 mb-2 d-flex justify-content-between" key={index}>
                            <div className="me-4">
                                <h3>Worker Name : {item.user}</h3>
                                <h5>Department : {item.department}</h5>
                                <p>Work Detail : {item.detail}{index}</p>
                            </div>
                            <button onClick={(a)=>removeData(index)} className="btn btn-danger">Remove</button>
                        </div>
                    ))
                }
            </div>
            
        </div>
    );
};

export default BasicUseState;