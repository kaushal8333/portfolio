import { useState } from "react";
import "./Projects.css";
import project from "./project";

export default function Projects() {

    const [enter, setEnter] = useState(null);
    return (
        <div className="project-container">
            <h1 style={{ display: "flex" }} className="poppins-thin text-brown text-7xl mt-10 ml-10">Projects</h1>
            {project && project.map((proitem, index) => (
                <div className="project" key={proitem.id} >
                    <div className="image-container w-full h-full" onMouseEnter={() => setEnter(index)} onMouseLeave={() => setEnter(null)}>
                        <img src={proitem.image} alt="project_photo" height={"200px"} width={"200px"} />
                        {enter === index &&
                            <div className="hover-container">
                                <h3 style={{ padding: "10px", fontSize: "25px" }}>Visit github</h3>
                                <button>
                                    <a href="https://github.com/kaushal8333">Go to github</a>
                                    </button>
                            </div>}
                    </div>
                    <div className="desc-container">
                        <div>

                            <h3 className="text-brown text-4xl poppins-thin" >{proitem.title}</h3>
                        </div>
                        <div>

                            <p className="px-8 poppins-thin font-extra-light" style={{color:"#f3f4f3"}}>{proitem.desc}</p>
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}