import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';

export function MusicProject() {
    return (
        <div className="project">
            <span className="projectTitle"> Spotify API Music Player </span>
            <img className="projectImg" alt="music_pic" />
            <div className="projectDescription">
                <div className="projectLinks">
                    <a href="https://github.com/nugalcode" target="_blank" rel="noreferrer" title="live">
                        <div className="liveButton button"> Live </div>
                    </a>
                    <a href="https://github.com/nugalcode" target="_blank" rel="noreferrer" title="github">
                        <GitHubIcon className="gitHubIcon button" />
                    </a>
                </div>
                <ul className="technologies">
                    <li> React </li>
                    <li> Spotify API </li>
                    <li> Spotify API Wrapper Libraries </li>
                </ul>
            </div>
        </div>
    )
}

export default MusicProject;