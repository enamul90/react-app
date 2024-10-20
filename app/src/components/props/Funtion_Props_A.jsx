
import Funtion_Props_B from './Funtion_Props_B';

const Funtion_Props_A = () => {

    const ButtonEvent = () => {
        alert('Button Clicked!')
    }
    

    return (
        <div>
            <Funtion_Props_B btnClick={ButtonEvent} />
        </div>
    );
};

export default Funtion_Props_A;