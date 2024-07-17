import Home from "./Home";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
export default function NavBar() {
    return (

        <div className="container">
            <div className="tags">
                <div className="navbar-container lg:ml-72 lg:w-3/4 lg:mr-auto mr-auto mt-5 p-3 flex justify-between items-center md:ml-32 sm:ml-auto sm:mr-auto">
                    <div className="heading">
                        <h3>KK</h3>
                    </div>
                    <ul className="p-1 gap-2 sm:gap-[14px]">
                        <li>
                            <AnchorLink href="#home">
                                <a className="p-1 sm:p-3">Home</a>
                            </AnchorLink>
                        </li>
                        <li>
                        <AnchorLink href="#about">
                                <a className="p-1 sm:p-3">About Me</a>
                            </AnchorLink>
                        </li>
                        <li>
                        <AnchorLink href="#projects">
                                <a className="p-1 sm:p-3">Projects</a>
                            </AnchorLink>                        </li>
                        <li>
                        <AnchorLink href="#contact">
                                <a className="p-1 sm:p-3">Contact Me</a>
                            </AnchorLink>                        </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}