import { Link } from "react-router-dom";
import "../styles/navbar.css";

function Navbar () {
    return <>
    <div className="nav-container">
        <nav className="nav-bar">
            <ul>
                <li><Link to="/">Register</Link></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
        </nav>
    </div>
    </>
}

export default Navbar;