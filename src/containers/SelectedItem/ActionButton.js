import React from 'react';
import {Link} from 'react-router-dom';

const ActionButton = ({ onClick, text, linkHref }) => {
    return (
        <Link to={linkHref} className="view-more-btn" onClick={onClick}>
            {text}
        </Link>
    );
};

export default ActionButton;