import React from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import ArrowIcon from './ArrowIcon';

import './CardDetails.css';

const CardDetails = (props) => {
    const card = props.data;
    
    let images_arr;

    if (card.images) {
        images_arr = card.images.map((img_src, i) => {
           return <img src={img_src} alt={card.title} key={i}/>
        });
    }
    
    return (
        <section className='fullCard-container'>
            <div className='slider'>
                <Carousel
                    itemWidth={640}
                    infinite
                    arrowLeft={<ArrowIcon arrow_direction='arrow left' />}
                    arrowRight={<ArrowIcon arrow_direction='arrow right' />}
                    addArrowClickHandler>
                    {images_arr ? images_arr : <img src='' alt='kitten' />}
                </Carousel>
            </div>
            <div className='fullCard-content'>
                <h1 className='fullCard-header'> {card.title} </h1>
                <p className='fullCard-subheader'>{card.address}</p>
                <p className='fullCard-subheader'>{card.sellerName}</p>
                
                <p className='fullCard-description'>{card.description}</p>

                <p className='fullCard-price'>{card.price}</p>
            </div>
        </section>
    )
}

export default CardDetails;