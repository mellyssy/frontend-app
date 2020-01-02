import React from 'react';

const SmallCard = (props) => {
    const cardContent = props.item;
    return (
        <article>
            <img src={cardContent.previewImage} alt={cardContent.address}/>
            <p>Title: {cardContent.title}</p>
            <p>Address: {cardContent.address}</p>
            <p>Price: {cardContent.price}</p>
        </article>
    )
}

export default SmallCard;