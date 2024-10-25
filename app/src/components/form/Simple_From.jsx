

const Simple_From = () => {

    const submitData = (Event)=>{
        Event.preventDefault();
        alert(`First Name: ${Event.target.fname.value}`);
    }


    return (
        <div>
            <form  onSubmit={submitData}>
                <label className="form-label" for="fname">First name:</label><br />
                <input className="form-control" type="text" id="fname" name="fname" required />
                <br />
                <button className="btn btn-primary w-100" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Simple_From;