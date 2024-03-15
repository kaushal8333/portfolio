import logo from "./profile_photo.jpg"
import "./Home.css"


export default function Home(){
    return(
        <div className="header-container">
            <div className="header-text-container">
                <h1>Hey there, I'm Krishna kaushal</h1>
                <h3 style={{color:"rgb(10, 55, 255)",fontWeight:"7.5rem"}}>Front-end developer</h3>
            </div>
            <div className="header-image">
            <img src={logo} alt="profile_photo" id="profile-photo" />
            </div>
        </div>
    )
}