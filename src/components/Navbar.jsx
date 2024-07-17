import Home from "./Home";

import "./Navbar.css";
export default function NavBar() {
    return (

        <div className="container">
            <div className="tags">
                <div className="navbar-container lg:ml-72 lg:w-3/4 lg:mr-auto mr-auto mt-5 p-3 flex justify-between items-center md:ml-32 sm:ml-auto sm:mr-auto">
                    <div className="heading">
                        <h3>KK</h3>
                    </div>
                    <ul>
                        <li>
                            <a href={<Home />} className="button md:ml-20 sm:p-3">Home</a>
                        </li>
                        <li>
                        <a href="/" className="sm:p-3">About Me</a>
                        </li>
                        <li>
                            <a href="/" className="sm:p-3">Projects</a>
                        </li>
                        <li>
                            <a href="/" className="sm:p-3">Contact Me</a>
                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}