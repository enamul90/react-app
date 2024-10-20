

const Simple_Props_B = (props) => {
    return (
        <div className="w-50 p-3 bg-light m-auto">
        
            <h1 >Hello {props.name}</h1> 
            <br />
            <p>My Profile {props.profile} </p>
        </div>
    );
};

export default Simple_Props_B;