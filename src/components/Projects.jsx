import { useState } from "react";
import "./Projects.css";
import project from "./project";

export default function Projects() {

    const [enter, setEnter] = useState(null);
    return (
        <div className="project-container">
            <h1 style={{ margin: "10px", display: "flex" }}>Projects</h1>
            {project && project.map((proitem, index) => (
                <div className="project" key={proitem.id} >
                    <div className="image-container" onMouseEnter={() => setEnter(index)} onMouseLeave={() => setEnter(null)}>
                        <img src={proitem.image} alt="project_photo" height={"500px"} width={"500px"} />
                        {enter === index &&
                            <div className="hover-container">
                                <h3 style={{ padding: "10px", fontSize: "25px" }}>Visit github</h3>
                                <button>Go to github</button>
                            </div>}
                    </div>
                    <div className="desc-container">
                        <div>

                            <h3 >{proitem.title}</h3>
                        </div>
                        <div>

                            <p>{proitem.desc}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}