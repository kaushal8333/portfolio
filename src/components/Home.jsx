import logo from "./profile_photo.jpg"
import "./Home.css"


export default function Home(){
    return(
        <div className="header-container">
            <div className="header-text-container w-1/3 lg:w-3/6 lg:mr-0 lg:ml-0 md:ml-2 md:w-2/3 sm:w-1/2">
                <h1 className="poppins-thin pb-3.5 text-xl md:text-5xl sm:text-5xl">Hey there, I'm Krishna kaushal</h1>
                <h3 className="poppins-thin pb-3.5 text-xl md:text-4xl sm:text-4xl" style={{color:"rgb(10, 55, 255)",fontWeight:"7.5rem"}}>Front-end developer</h3>
                <button id="resumebutton">
                    Download Resume</button>
            </div>
            <div className="header-image lg:w-1/3 md:w-3/6 md:m-0">
            <img src={logo} alt="profile_photo" id="profile-photo" />
            </div>
        </div>
    )
}