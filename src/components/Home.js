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
                <span className="myName"> Jed Mandy </span>
                <span className="myName"> Nugal<span className="crimson">,</span> </span>
                <span className="myName"> Dev<span className="crimson">.</span> </span>
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