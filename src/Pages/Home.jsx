import React, { useEffect, useState } from 'react';
import { useScramble } from "use-scramble";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-scroll';

import ParticleCanvas from '../Components/BufferGeometry';
const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = ["the user interface", "experience of websites", "web applications"];

  // Utilisation de useEffect pour alterner entre les textes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change de texte toutes les 2 secondes
    return () => clearInterval(interval);
  }, [texts.length]); // Ajout de texts.length dans les dépendances

  // Récupère le texte actuel
  const currentText = texts[currentIndex];

  // Hook useScramble pour mélanger le texte
  const { ref } = useScramble({ text: currentText, speed: 0.6,
    tick: 1,
    step: 1,
    scramble: 10,
    seed: 0,});

  return (
    <section id='Home'>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col-6 forIntro'>
          <div className='forCanvas'>
      <ParticleCanvas />
    </div>
          </div>
          <div className="col-md-6">
            <div className="hero-content-box">
              <span className="hero-sub-title">I'm Ahlem Labiadh</span>
              
              <h1 className="hero-title">Front End Developer</h1>
              <span className="hero-sub-title thin">I build <span ref={ref}></span></span>

              <div className="hero-image-box d-md-none text-center">
                {/* Placeholder for hero image */}
              </div>
              
              <div className="button-box d-flex flex-wrap align-items-center">
                <Link
                className=" tj-btn-secondary material-bubble"
                  to="About" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                >
               About me <ArrowForwardIosIcon /></Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
