import { forwardRef } from 'react';
import myPic from '../imgs/pic.jpg';
import '../css/Home.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import resume from '../imgs/resume_2022.pdf';

/* 
 * Each are arrays of characters. A character's key attribute will be its array index. 
    In this case this is fine since the array will be unchanging.
 */
const firstName = "Jed Mandy".split("")
const lastName = "Nugal".split("");
const dev = "DEV".split("");


const Home = forwardRef((props , ref) => {
    return (
        <div id="Home" className="section" ref={ref}>
            <div className="picWrap">
                <img className="myPic" src={myPic} alt="pic"/>
            </div>
            <div id="homeRightSideWrapper">
                <span>
                    {firstName.map((c, index) => {
                        return <span className="myName" key={index}>{c}</span>
                    })}
                </span>
                <span>
                    {lastName.map((c, index) => {
                        return <span className="myName" key={index}>{c}</span>
                    })}
                    <span className="myName crimson">,</span>
                </span>
                <span>
                    {dev.map((c, index) => {
                        return <span className="myName" key={index}>{c}</span>
                    })}
                    <span className="myName crimson">.</span>
                </span>
                <div className="links">
                    <a href={resume} target="_blank" rel="noreferrer">
                        <div className="resume button"> Resume </div>
                    </a>
                    <a href="https://github.com/nugalcode" target="_blank" rel="noreferrer">
                        <GitHubIcon className="gitHubIcon button"/>
                    </a>
                </div>
            </div>
        </div>
    )
})

export default Home;