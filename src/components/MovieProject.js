import React from 'react';
import movie_pic from '../imgs/movie_pics/movies_app_ss_home.JPG';
import GitHubIcon from '@mui/icons-material/GitHub';

export function MovieProject() {
    return (
        <div className="project">
            <span className="projectTitle"> The Movie Database Movies App </span>
            <div className="projectImgWrap">
                <img className="projectImg" src={movie_pic} alt="movie_pic" />
            </div>
            <div className="projectDescription">
                <div className="projectLinks">
                    <a href="https://github.com/nugalcode" target="_blank" rel="noreferrer" title="live">
                        <div className="liveButton button"> Live </div>
                    </a>
                    <a href="https://github.com/nugalcode" target="_blank" rel="noreferrer" title="github">
                        <GitHubIcon className="gitHubIcon button" />
                    </a>
                </div>
                <div className="description">
                    <ul className="descriptionList">
                        <li> A movies display app to search movies and see their details. </li>
                        <li> The app fetches the movie data using the Movie Database API. </li>
                        <li> There are options to search by genre, top rated, featured, or by title. </li>
                    </ul>
                    <ul className="technologies">
                        <li> React </li>
                        <li> The Movie Database API </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default MovieProject;