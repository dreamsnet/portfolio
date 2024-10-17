import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import StarIcon from '@mui/icons-material/Star';
export default function Experience() {
  return (
    <section id='Experience'>
      <h2>Experience</h2>
      <p>Step into the depths of my 15-year professional journey, where each milestone, role,<br></br>and achievement tells a unique story of growth, expertise, and dedication across diverse industries and domains</p>
      <VerticalTimeline>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="Aug 2023 - Present"
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Front End Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">EKLECTIC</h4>
      <p>
      Develop user-friendly interfaces to enhance functionality
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2015 - 2023"
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Front End Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">DIGITAL VIRGO</h4>
      <p>
      Engineer user-friendly interfaces to elevate functionality and user satisfaction
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2010 - 2015"
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Front End Developer</h3>
      <h4 className="vertical-timeline-element-subtitle">ACCESS</h4>
      <p>
      Developed and maintained functional and user-friendly websites and applications.
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date="2009 - 2010"
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Webmaster</h3>
      <h4 className="vertical-timeline-element-subtitle">KGR</h4>
      <p>
      Developing and maintaining the user interface
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="2008 - 2009"
      icon={<WorkIcon />}
    >
      <h3 className="vertical-timeline-element-title">Webmaster</h3>
      <h4 className="vertical-timeline-element-subtitle">SHOW KIFECH</h4>
      <p>
      Content Management and Technical Maintenance
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="June 2008"
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">INTERNSHIP</h3>
      <h4 className="vertical-timeline-element-subtitle">MEDIANET</h4>
      <p>
      Completed project PFE : Designing and realizing a website
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement
      className="vertical-timeline-element--education"
      date="Aug 2007"
      icon={<SchoolIcon />}
    >
      <h3 className="vertical-timeline-element-title">INTERNSHIP</h3>
      <h4 className="vertical-timeline-element-subtitle">CNP</h4>
      <p>
      Completed project : Realization of educational courses with Flash
      </p>
    </VerticalTimelineElement>
    <VerticalTimelineElement className='lastOne'
      icon={<StarIcon />}
    />
  </VerticalTimeline></section>
  )
}


