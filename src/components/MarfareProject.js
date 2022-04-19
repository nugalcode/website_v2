import React from 'react';
import marfare_menu_pic from '../imgs/marfare_pics/marfare_menu.png';
import GitHubIcon from '@mui/icons-material/GitHub';

export function MarfareProject() {
    return (
        <div className="project" id="marfareProject">
            <div className="projectImgWrap"> 
                <img className="projectImg" src={marfare_menu_pic} alt="marfare_pic" />
            </div>
            <div className="projectDescription">
                <span className="projectTitle"> The Marfare: A 2D Web Game </span>
                <div className="projectLinks">
                    <a href="https://github.com/nugalcode" target="_blank" rel="noreferrer" title="github">
                        <div className="projectButton button"> Repo </div>
                    </a>
                    <a href="https://docs.google.com/document/d/1CMreVQ3VCu-rIhICe1iwfcoPJGofpVOAXTz8djX8rj8/edit?usp=sharing" target="_blank" rel="noreferrer" title="user guide">
                        <div className="projectButton button"> Guide </div>
                    </a>
                </div>
                <div className="description">
                    <ul className="descriptionList">
                        <li> An original multiplayer browser game created by a team of four people. </li>
                        <li> Offers character selection of 'salty', 'sweet', 'spicy', or 'sour' mice. </li>
                        <li> Arms players with whisks, ketchup bottles, salt shakers, and more in a free-for-all battle-royale. </li>
                    </ul>
                    <ul className="technologies">
                        <li> Phaser 3</li>
                        <li> PixiJS </li>
                        <li> WebSockets </li>
                        <li> Tiled Map Editor </li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default MarfareProject;