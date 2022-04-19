import { forwardRef } from 'react';
import '../css/About.css';
import SectionTitle from './SectionTitle.js'
import myPic from '../imgs/pic.jpg';

const About = forwardRef((props, ref) => {
    return (
        <div id="About" className="section" ref={ref}>
            <SectionTitle title={"About"} />
            <div className="aboutContentContainer">
                <div className="aboutPicWrap">
                    <img className="aboutPic" src={myPic} alt="pic" />
                </div>
                <div id="aboutDescription">
                    <span> Hello, thank you for scrolling through my site! I'm a front-end web developer based in the San Francisco Bay Area.
                    I graduated from the <a className="davisLink" href="https://www.ucdavis.edu/" target="_blank" rel="noreferrer">University of California, Davis, </a>
                        as a major in Computer Science and Engineering. I am passionate about solving problems through coding, as well as empowering
                        people's own passions and interests through my projects. 
                    </span>
                </div>
            </div>
        </div>
    )
})

export default About;