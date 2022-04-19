import React from 'react';
import movie_pic from '../imgs/movie_pics/movies_app_ss_home.JPG';
import GitHubIcon from '@mui/icons-material/GitHub';

export function MovieProject() {
    return (
        <div className="project" id="movieProject">
            <div className="projectDescription">
                <span className="projectTitle"> The Movie Database Movies App </span>
                <div className="projectLinks">
                    <a href="https://github.com/nugalcode" target="_blank" rel="noreferrer" title="live">
                        <div className="projectButton button"> Live </div>
                    </a>
                    <a href="https://github.com/nugalcode/movies_app" target="_blank" rel="noreferrer" title="github">
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
                        <li> The Movie Database API </li>
                    </ul>
                </div>
            </div>
            <div className="projectImgWrap">
                <img className="projectImg" src={movie_pic} alt="movie_pic" />
            </div>
        </div>
    )
}

export default MovieProject;