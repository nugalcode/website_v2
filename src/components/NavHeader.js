import React from 'react';
import '../css/NavHeader.css';

const NavHeader = ({homeRef, projectsRef, aboutRef, contactRef}) => {

    const scrollToSection = (ref) => {
        window.scrollTo({
            top: ref.current.offsetTop,
            behavior: 'smooth'
        });
    };

    /*const scrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView(
                {
                    behavior: 'smooth',
                }
            );
        }
    };*/

    const handleScroll = (ref) => {
        scrollToSection(ref)
    }

    return (
        <div id="NavHeader">
            <ul className="nav">
                <li className="link" onClick={() => handleScroll(homeRef)} > Home </li>
                <li className="link" onClick={() => handleScroll(projectsRef)}> Projects </li>
                <li className="link" onClick={() => handleScroll(aboutRef)}> About </li>
                <li className="link" onClick={() => handleScroll(contactRef)}> Contact </li>
            </ul>
        </div>
    )
}

export default NavHeader;