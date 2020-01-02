import React from 'react';
import SmallCard from './SmallCard';

import './ItemsTable.css'

const ItemsTable = (props) => {
    const cards = props.data.map((item) => {
        return <SmallCard key={item.id} item={item} />
    });
    return (
        <section className='cards-grid'>
            {cards}
        </section>
    )
}

export default ItemsTable;