import React, { useState, useEffect } from 'react';
import { ReactComponent as Hamburger } from '../img/hamburger.svg';
import { ReactComponent as Brand } from '../img/logo.svg';
import { Link } from 'react-scroll';
import './Nav.css';

const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <header className={`headerMain ${scroll ? 'sticky' : ''}`}>
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <Brand />
          </div>
          <div className="menu-icon" onClick={handleShowNavbar}>
            <Hamburger />
          </div>
          <div className={`nav-elements ${showNavbar && 'active'}`}>
            <ul>
              <li>
                <Link 
                  activeClass="active" 
                  to="Home" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="About" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="Work" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  to="Experience" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                >
                  Experience
                </Link>
              </li>
              <li>
              <Link
                  to="Contact" 
                  spy={true} 
                  smooth={true} 
                  offset={-70} 
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
