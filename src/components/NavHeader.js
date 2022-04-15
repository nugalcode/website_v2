import React from 'react';
import '../css/NavHeader.css';

const NavHeader = () => {

    return (
        <div id="NavHeader">
            <ul className="nav">
                <li className="link" onClick={scrollToSection(homeRef)} > Home </li>
                <li className="link" onClick={scrollToSection(projectsRef)}> Projects </li>
                <li className="link" onClick={scrollToSection(aboutRef)}> About </li>
                <li className="link" onClick={scrollToSection(contactRef)}> Contact </li>
            </ul>
        </div>
    )
}

export default NavHeader;