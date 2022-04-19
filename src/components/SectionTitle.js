import { useRef } from 'react';
import '../css/SectionTitle.css';
import useInView from '../hooks/useInView.js';

const SectionTitle = ({ title }) => {
    const ref = useRef();

    const inView = useInView(ref, '100px');

    return (
        <div className="sectionTitle" ref={ref}>
            <div className={inView ? "titleLine over animate" : "titleLine over"}/>
            <span> {title} </span>
            <div className={inView ? "titleLine under animate" : "titleLine under"} />
        </div>
    )
}

export default SectionTitle;