

const Object_Props_B = (props) => {
    return (
        <div className="bg-light p-4">
            <h3>Name :{props.Data['name']}  </h3>
            <h3> age : {props.Data['age']} </h3>
            <h3>City : {props.Data['city']}  </h3>

        </div>
    );
};

export default Object_Props_B;