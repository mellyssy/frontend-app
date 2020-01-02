import React from 'react';

import './SmallCard.css';

const SmallCard = (props) => {
    const cardContent = props.item;
    return (
        <article className='card-preview'>
            <img src={cardContent.previewImage} alt={cardContent.address}/>
            <div className='card-content'>
                <h3 className='card-title'>{cardContent.title}</h3>
                <p><span className='card-subtitle'>Адрес:</span> {cardContent.address}</p>
                <p><span className='card-subtitle'>Цена:</span> {cardContent.price}</p>
            </div>
        </article>
    )
}

export default SmallCard;