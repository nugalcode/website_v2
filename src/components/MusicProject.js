import React from 'react';

export function MusicProject() {
    return (
        <div className="project">
            <span className="projectTitle"> Spotify API Music Player </span>
            <img className="projectImg" alt="music_pic" />
            <div className="projectDescription">
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