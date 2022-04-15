import { useState } from 'react';
import '../css/NavModal.css';
import MenuIcon from '@mui/icons-material/Menu';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

const NavModal = ({ homeRef, projectsRef, aboutRef, contactRef }) => {

	const [isOpen, setIsOpen] = useState(false);

	const scrollToSection = (ref) => {
		window.scrollTo({
			top: ref.current.offsetTop,
			behavior: 'smooth'
		});
	};

	const handleScroll = (ref) => {
		setIsOpen(false);
		scrollToSection(ref);
	}

	const handleStopPropagation = (e) => {
		e.stopPropagation();
	}
	return (
		<div id="NavModal">

			{isOpen ?
				<MenuOpenIcon className="navIcon" onClick={() => setIsOpen(false)}/>
				:
				<MenuIcon className="navIcon" onClick={() => setIsOpen(true)}/>
			}

			{isOpen &&
				<div id="modal" onClick={() => setIsOpen(false)}>
				<div className="contentWrap" onClick={(e) => handleStopPropagation(e)}>
					<ul className="nav">
						<li className="link" onClick={() => handleScroll(homeRef)} > Home </li>
						<li className="link" onClick={() => handleScroll(projectsRef)}> Projects </li>
						<li className="link" onClick={() => handleScroll(aboutRef)}> About </li>
						<li className="link" onClick={() => handleScroll(contactRef)}> Contact </li>
					</ul>
				</div>
			</div>
			}
		</div>
	)
}

export default NavModal;
