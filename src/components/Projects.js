import { forwardRef } from 'react';
import SectionTitle from './SectionTitle.js';
import '../css/Projects.css';

const Projects = forwardRef((props, ref) => {
    return (
        <div id="Projects" ref={ref}>
            <SectionTitle title={"Projects"}/>
            <div className="projectsWrap">
                <div className="project">
                    <span className="projectTitle"> The Marfare: A 2D Web Game </span>
                    <img className="projectImg" />
                </div>
                <div className="project">
                    <span className="projectTitle"> The Movie Database Movies App </span>
                    <img className="projectImg" />
                </div>
                <div className="project">
                    <span className="projectTitle"> Spotify API Music Player </span>
                    <img className="projectImg" />
                </div>
            </div>
        </div>
    )
})

export default Projects;