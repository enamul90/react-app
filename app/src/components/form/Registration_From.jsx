import style from "../../assets/css/Registration_From.module.css"

const Registration_From = () => {

    const registerData = (Event)=>{
        Event.preventDefault();
        let FirstNme = Event.target.first_name.value;
        let LastName = Event.target.last_name.value;
        let DateOfBirth = Event.target.date_of_birth.value;
        let MobileNumber = Event.target.phone_number.value;
        let Email = Event.target.email.value;
        let City = Event.target.city.value;
        let Color = Event.target.color.value;
        let Age = Event.target.age.value;
        let About = Event.target.about.value;
        let Gender = Event.target.gender.value;
        let Trams = Event.target.trams.value;
        let password = Event.target.password.value;
        let confirmPassword = Event.target.confirmPassword.value;

        if(password !== confirmPassword){
            alert("Password and Confirm Password should be same");
            return;
        }
        


        const FormData= {
            FirstName: FirstNme,
            LastName: LastName,
            DateOfBirth: DateOfBirth,
            MobileNumber: MobileNumber,
            Email: Email,
            City: City,
            Color: Color,
            Age: Age,
            About: About,
            Gender: Gender,
            Trams: Trams,
        }
        console.log(FormData);
    }


    return (
        <div className={style.card_aria}>
            <h3>Registration From</h3>
            <p>Input Your Personal Information </p>
            <br />

            <form onSubmit={registerData} >
                <div className="d-flex"> 
                    <input className="form-control mb-2 me-1" type="text" placeholder="First Name" name="first_name" required />
                    <input className="form-control mb-2 ms-1" type="text" placeholder="Last Name" name="last_name" required />
                </div>
                
                <input className="form-control mb-2" type="date" placeholder="Date of Birth" name="date_of_birth" required />
                <input className="form-control mb-2" type="tel" placeholder="Phone Number" name="phone_number" required />
                <input className="form-control mb-2" type="email" placeholder="Email" name="email" required />

                <select name="city" className=" form-select  mb-3"  required >
                    <option value="">Select City</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Chittagong">Chittagong</option>
                    <option value="Rajshahi">Rajshahi</option>
                    <option value="Sylhet">Sylhet</option>
                    <option value="Barishal">Barishal</option>
                    <option value="Rangpur">Rangpur</option>
                    <option value="Mymensingh">Mymensingh</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Comilla">Comilla</option>
                    <option value="Savar">Savar</option>
                </select>

                <div className="d-flex align-items-center mb-2">
                    <label className="fs-5 me-4" >Color :</label>
                    <input className="form-control w-25" type="color" name="color" />
                </div>

                <div className="d-flex align-items-center mb-2">
                    <label className="fs-5 me-3" >Age :</label>
                    <input className=" form-range w-75" type="range" max={100} min={18}  name="age" />
                </div>

                <textarea className="form-control mb-3" name="about" placeholder="About Your Self" rows={4} />


                <div className="d-flex align-items-center mb-2">
                    <label className="me-4 fs-5" > Gender</label>

                    <span className="d-flex align-items-center me-3"><input name="gender" type="radio"  className="form-check" value="Male" /> <label className="ms-2" >Male</label></span>
                    <span className="d-flex align-items-center"><input name="gender" type="radio"  className="form-check" value="Female" /> <label className="ms-2" >Female</label></span>
                </div>

                <div className="d-flex align-items-center mb-3">
                    <label className="me-4 fs-5" >Terms & Conditions</label>
                    <input type="checkbox" name="trams" className="form-check" value={true} required />
                    <label className="ms-2" >I agree with the terms and conditions</label>
                </div>

                <input className=" form-control mb-2" type="password" name="password" placeholder="Password" />
                <input className=" form-control mb-2" type="password" name="confirmPassword" placeholder="Confirm Password" />

                <br />
                <button type="submit" className='btn btn-primary w-100'>Register</button>
            </form>
        </div>
    );
};

export default Registration_From;