import education from "./education"
import "./About.css"
import { useState } from "react"

export default function About() {

    const [checker, setChecker] = useState(0);
    const Time = (index) => {
        return (
        <div className="timeline-container">
            <span className="material-symbols-outlined icon" onMouseEnter={() => setChecker(index)} onMouseLeave={()=>setChecker(5)}>
                radio_button_unchecked
            </span>
            <hr className='timeline' />
        </div>
        )
    }


    return (
        <div className="about-outer-container">
            <h1 className="poppins-thin text-brown text-7xl">About Me</h1>
            <div className="outer-container">
                {education.map((editem, index) => (
                    <div className="about-container" key={editem.id}>
                        {checker.index === index ?
                            <div className="ed-container" >
                                <h1>{editem.heading}</h1>
                                <h4>{editem.timeline}</h4>
                                <p>{editem.description}</p>
                            </div> :<div className="dummy"></div>
                        }
                        <div className="timeline-container">
                            
                            <Time index={index} />
                        </div>
                    </div>

                )
                )}

            </div>
        </div>
    )
}