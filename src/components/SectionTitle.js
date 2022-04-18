import React from 'react';
import '../css/SectionTitle.css';

const SectionTitle = ({title}) => {
    return (
        <div className="sectionTitle">
            <div className="titleLine over" />
            <span> {title} </span>
            <div className="titleLine under" />
        </div>
    )
}

export default SectionTitle;