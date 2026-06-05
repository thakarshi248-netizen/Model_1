import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">
                Darji Thakarshi
            </div>

            <nav className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/display">Display</Link>
                <Link to="/counter">Counter</Link>
                <Link to="/show_user">Show User</Link>
                <Link to="/static_website">Website</Link>
                <Link to="/register">Register</Link>
                <Link to="/login">Login</Link>
            </nav>
        </header>
    );
}

export default Header;