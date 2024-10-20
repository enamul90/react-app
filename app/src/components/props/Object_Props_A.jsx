import Object_Props_B from "./Object_Props_B";


const Object_Props_A = () => {

    const person = {
        name: 'Enamul Hossen Firoz',
        age: 27,
        city: 'Barishal'
    };
    return (
        <div>
            <Object_Props_B Data={person} />
        </div>
    );
};

export default Object_Props_A;