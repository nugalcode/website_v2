import { forwardRef } from 'react';
import myPic from '../imgs/pic.jpg';
import '../css/Home.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import resume from '../imgs/resume_2022.pdf';

const Home = forwardRef((props , ref) => {
    return (
        <div id="Home" className="section" ref={ref}>
            <div className="picWrap">
                <img className="myPic" src={myPic} alt="pic"/>
            </div>
            <div id="homeRightSideWrapper">
                <span id="myName"> Jed Mandy Nugal </span>
                <div id="homeDescription"> Computer Science and Engineering bachelor from the University of California Davis
                    interested in front end web development. I am excited about creating neat looking
                    applications, and this is a placeholder I'll probably change later.
                </div>
                <div className="links">
                    <a href={resume} target="_blank" rel="noreferrer">
                        <div className="resume button"> Resume </div>
                    </a>
                    <a href="https://github.com/nugalcode" target="_blank" rel="noreferrer">
                        <GitHubIcon className="gitHubIcon button" />
                    </a>
                </div>
            </div>
        </div>
    )
})

export default Home;