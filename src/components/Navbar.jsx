
import "./Navbar.css";
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
                            <a href="/" className="button">Home</a>
                        </li>
                        <li>
                        <a href="/">About Me</a>
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