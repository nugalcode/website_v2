import React from 'react';
import '../css/SectionTitle.css';

const SectionTitle = ({title}) => {
    return (
        <div className="sectionTitle">
            <span> {title} </span>
            <div className="titleUnderline" />
        </div>
    )
}

export default SectionTitle;