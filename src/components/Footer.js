import React from 'react';
import '../css/Footer.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import resume from '../imgs/resume_2022.pdf';
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
    return (
        <div id="Footer">
            <div className="footerContent">
                <div id="footerLinks">
                    <a href={resume} target="_blank" rel="noreferrer">
                        <div className="footerButton footerResume"> Resume </div>
                    </a>
                    <a href="https://github.com/nugalcode" target="_blank" rel="noreferrer">
                        <GitHubIcon className="footerButton" />
                    </a>
                </div>
                <div id="footerDescription">
                    <span> Developed by Jed Mandy Nugal </span>
                    <CopyrightIcon />
                    <span> 2022 </span>
                </div>
            </div>
        </div>
    )
}

export default Footer;