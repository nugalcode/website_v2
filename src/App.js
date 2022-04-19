import { useRef } from 'react';
import './App.css';
import Home from './components/Home.js';
import Projects from './components/Projects.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import NavHeader from './components/NavHeader.js'
import NavModal from './components/NavModal.js';
import Footer from './components/Footer.js';

function App() {

    const homeRef = useRef();
    const projectsRef = useRef();
    const aboutRef = useRef();
    const contactRef = useRef();

    return (
        <div className="App">
            <NavModal homeRef={homeRef}
                projectsRef={projectsRef}
                aboutRef={aboutRef}
                contactRef={contactRef}/>
            <NavHeader
                homeRef={homeRef}
                projectsRef={projectsRef}
                aboutRef={aboutRef}
                contactRef={contactRef}
            />
            <Home ref={homeRef}/>
            <Projects ref={projectsRef}/>
            <About ref={aboutRef}/>
            <Contact ref={contactRef} />

            <Footer />
        </div>
    );
}

export default App;
