
import { NavLink} from "react-router-dom"

const Nav = () => {
    return (
        <div>
            <ul className="d-flex list-unstyled justify-content-center p-4 bg-body-secondary">
                <li className="mx-2"><NavLink className={({isActive})=> isActive? "active-button":"deactivate-button" } to="/">Home</NavLink></li>
                <li className="mx-2"><NavLink className={({isActive})=> isActive? "active-button":"deactivate-button" } to="/card">Card</NavLink></li>
                <li className="mx-2"><NavLink className={({isActive})=> isActive? "active-button":"deactivate-button" } to="/from">From</NavLink></li>
                <li className="mx-2"><NavLink className={({isActive})=> isActive? "active-button":"deactivate-button" } to="/map">Map</NavLink></li>
            </ul>
        </div>
    );
};

export default Nav;