import React from 'react';

import './ArrowIcon.css';

const ArrowIcon = (props) => {
    return (
    <div className='arrow-icon'>
        <div className={props.arrow_direction}></div>
    </div>
    )
}

export default ArrowIcon;
