import elevator from "../components/images/elevator.png";
import parking from "../components/images/parking.png";
import weather from "../components/images/weather.png";

const projects=[
    {
        id:1,
        image:weather,
        title:"Weather app",
        desc:"Created a dynamic weather app using React.js and a weather API (OpenWeatherMap). Users can search for any city, and the app fetches real-time weather data. This data, including temperature, humidity, is then displayed in a user-friendly interface built with React components"
    },
    {
        id:2,
        image:parking,
        title:"Parking management system",
        desc:"Built a C project to manage a parking lot. It tracks vehicles, calculates fees, and shows availability. Imagine a system recording license plates, keeping track of parking spaces",
    },
    {
        id:3,
        image:elevator,
        title:"Application of elevator",
        desc:"Elevator control systems rely on data structures to optimize movement and minimize wait times. Imagine using priority queues to store passenger requests (floor numbers) and having the elevator efficiently serve them,  considering direction and minimizing unnecessary stops",
    },
]

export default projects;