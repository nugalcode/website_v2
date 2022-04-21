import React from 'react';
import music_pic from '../imgs/music_pics/music_app_ss.png';

export function MusicProject() {
    return (
        <div className="project" id="musicProject">
            <div className="projectImgWrap">
                <a href="https://github.com/nugalcode" target="_blank" rel="noreferrer" title="live">
                    <img className="projectImg" src={music_pic} alt="music_pic" />
                </a>
            </div>
            <div className="projectDescription">
                <span className="projectTitle"> Spotify API Music Player </span>
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
                        <li> A Spotify music player that uses Spotify API and wrapper libraries to fetch, display, and play songs. </li>
                        <li> Displays the logged in user's saved songs and playlists from Spotify. </li>
                        <li> Users can create and unfollow playlists, add songs to playlists, and add/remove songs from 'Liked Songs'. </li>
                        <li> All changes are reflected immediately in any official Spotify application. </li>
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