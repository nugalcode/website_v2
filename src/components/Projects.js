import { forwardRef } from 'react';
import SectionTitle from './SectionTitle.js';
import '../css/Projects.css';
import MarfareProject from './MarfareProject.js'
import MovieProject from './MovieProject.js';
import MusicProject from './MusicProject.js';

const Projects = forwardRef((props, ref) => {
    return (
        <div id="Projects" ref={ref}>
            <SectionTitle title={"Projects"}/>
            <div className="projectsWrap">
                <MarfareProject />
                <MovieProject />
                <MusicProject /> 
            </div>
        </div>
    )
})

export default Projects;