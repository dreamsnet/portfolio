import './App.css';
import { HashRouter } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Navbar from './Components/Nav';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import AnimatedCursor from "react-animated-cursor"
import { isMobile } from 'react-device-detect';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className="App">
       {!isMobile && 
      <AnimatedCursor
  innerSize={8}
  outerSize={35}
  color='183, 150, 251'
  outerAlpha={0.2}
  innerScale={0.7}
  outerScale={2}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'var(--cursor-color)'
  }}
  outerStyle={{
    border: '2px solid var(--cursor-color)'
  }}
/>}
     
<HashRouter>
      <Navbar />
<Home />
<About />
<Work />
<Experience />
<Contact />
</HashRouter>
<Footer />

    </div>
  );
}

export default App;
