import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../App.css";

export default function React(){

return (
<div className="vertical-container" id='about'>
    <h3 className='p-5 text-brown poppins-thin text-7xl'>About Me</h3>

<VerticalTimeline>
  <VerticalTimelineElement
    className="poppins-thin text-3xl vertical-timeline-element--work"
    contentStyle={{ background: '#cdcfa4', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #ffe4b9' }}
    date="2021 - present"
    iconStyle={{ background: '#ffe4b9', color: '#ffe4b9' }}
    // icon={<WorkIcon />}
  >
    <h3 className="vertical-timeline-element-title">Undergraduate</h3>
    <h4 className="vertical-timeline-element-subtitle">CBIT, Hyderabad</h4>
    <p>
      Computer Science and Engineering <br></br>
      CGPA:9.41
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#cdcfa4', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #ffe4b9' }}
    date="2019 - 2021"
    iconStyle={{ background: '#ffe4b9', color: '#ffe4b9' }}
    // icon={<WorkIcon />}
  >
    <h3 className="poppins-thin text-2xl vertical-timeline-element-title">Intermediate Education</h3>
    <h4 className="poppins-thin vertical-timeline-element-subtitle">New Vision Junior College</h4>
    <p>
      Stream: Maths, Physics, Chemistry
      <br></br>
      Percentage: 97.8%
    </p>
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: '#cdcfa4', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  #ffe4b9' }}
    date="2018 - 2019"
    iconStyle={{ background: '#ffe4b9', color: '#ffe4b9' }}
    // icon={<WorkIcon />}
  >
    <h3 className="poppins-thin text-2xl vertical-timeline-element-title">Higher Education</h3>
    <h4 className="poppins-thin vertical-timeline-element-subtitle">New Vision High School</h4>
    <p>
      CGPA: 9.8
    </p>
  </VerticalTimelineElement>
</VerticalTimeline>
</div>
)
}