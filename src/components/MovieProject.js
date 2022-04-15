import React from 'react';

export function MovieProject() {
    return (
        <div className="project">
            <span className="projectTitle"> The Movie Database Movies App </span>
            <img className="projectImg" alt="movie_pic" />
            <div className="projectDescription">
                <ul className="technologies">
                    <li> React </li>
                    <li> The Movie Database API </li>
                </ul>

            </div>
        </div>
    )
}

export default MovieProject;