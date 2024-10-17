import React from 'react';
import CountUp from 'react-countup';
import DoneIcon from "@mui/icons-material/Done";
import Skills from '../Components/Skills';
import CV from "../CV_en.pdf";
import DownloadIcon from '@mui/icons-material/Download';

export default function About() {
    return (
        <section id='About'>
           

            <div className='row1'>
                <div className='container forAbout'>
                    <div className='aboutMe'>
                        <h2>Get to know me!</h2>
                        <p>Front end Developer having 15 years of experience.<br />
                           Well-versed in numerous programming languages including HTML5, PHP, JavaScript, CSS, MySQL, NodeJs, React.</p>
                        <ul>
                            During my professional journey, I've held in charge multiple responsibilities such as: <br />
                            <DoneIcon /> Developing and maintaining the user interface<br />
                            <DoneIcon /> Build dynamic websites using CMS WordPress<br />
                            <DoneIcon /> Update / Optimize Code for better performances
                        </ul>
                        <div className="button-box d-flex flex-wrap align-items-center">
                            <a href={CV} className='tj-btn-secondary material-bubble forCV' target="_blank" rel="noopener noreferrer">
                                Download CV <DownloadIcon />
                            </a>
                        </div>
                    </div>

                    <div className='numberTotal'>
                        <div className='allNumber'>
                            <div className="flex align-center">
                                <div className="display-2"><CountUp end={15} enableScrollSpy /></div>
                                <div className="text-300 bold">Years of<br></br>experience</div>
                            </div>
                            <div className="flex align-center">
                                <div className="display-2 mg-right-12px"><CountUp end={600} duration={5} enableScrollSpy />+</div>
                                <div className="text-300 bold">Successful<br></br>projects</div>
                            </div>
                        </div>
                        <p className="mg-bottom-0">Experienced professional with 15 years of expertise in the field, having successfully delivered over 600 projects with utmost client satisfaction.</p>
                    </div>
                </div>
            </div>
            <div className='container'>
                <Skills />
            </div>
        </section>
    );
}
