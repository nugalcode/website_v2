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
                <div id="aboutDescription"> Computer Science and Engineering bachelor from the University of California Davis
                    interested in front end web development. I am excited about creating neat looking
                    applications, and this is a placeholder I'll probably change later.
                </div>
            </div>
        </div>
    )
})

export default About;