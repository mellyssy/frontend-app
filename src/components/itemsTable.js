import React from 'react';
import SmallCard from './SmallCard';

import useFetch from './useFetch';

import './ItemsTable.css'

const ItemsTable = ({ getCardId }) => {
    const items = useFetch('http://134.209.138.34/items');

    const cards = items.map((item) => {
        return (
            <a key={item.id} onClick={() => {getCardId(item.id)}}>
                <SmallCard item={item} />
            </a>
        )
    });
    return (
        <section className='cards-grid'>
            {cards}
        </section>
    )
}

export default ItemsTable;