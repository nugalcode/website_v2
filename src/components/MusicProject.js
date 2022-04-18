import React from 'react';
import music_pic from '../imgs/music_pics/music_app_ss.png';

export function MusicProject() {
    return (
        <div className="project">
            <span className="projectTitle"> Spotify API Music Player </span>
            <img className="projectImg" src={ music_pic } alt="music_pic" />
            <div className="projectDescription">
                <div className="projectLinks">
                    <a href="https://github.com/nugalcode" target="_blank" rel="noreferrer" title="live">
                        <div className="projectButton button"> Live </div>
                    </a>
                    <a href="https://github.com/nugalcode" target="_blank" rel="noreferrer" title="github">
                        <div className="projectButton button"> Repo </div>
                    </a>
                </div>
                <div className="description">
                    <ul className="descriptionList">
                        <li> A movies display app that uses The Movie Database API to fetch and display movie details. </li>
                        <li> Filters and searches movies by genres, title, popularity, and rating. </li>
                        <li> Uses localStorage to remember favorited movies. </li>
                    </ul>
                    <ul className="technologies">
                        <li> React </li>
                        <li> Spotify API </li>
                        <li> Spotify API Wrapper Libraries </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default MusicProject;