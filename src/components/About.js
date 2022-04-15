import { forwardRef } from 'react';
import '../css/About.css';

const About = forwardRef((props, ref) => {
    return (
        <div id="About" ref={ref}> ABOUT SECTION </div>
    )
})

export default About;