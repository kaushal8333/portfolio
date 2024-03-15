import About from "./About";
import Home from "./Home";
import "./Navbar.css";
import {BrowserRouter as Link} from "react-router-dom";
export default function NavBar() {
    return (

        <div className="container">
            <div className="tags">
                <div className="navbar-container">
                    <div className="heading">
                        <h3>KK</h3>
                    </div>
                    <ul>
                        <li>
                            <Link to={Home}>Home</Link>
                        </li>
                        <li>
                        <Link to={About}>About</Link>
                        </li>
                        <li>
                            <a href="/">Projects</a>
                        </li>
                        <li>
                            <a href="/">Contact Me</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}