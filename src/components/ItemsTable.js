import React from 'react';
import { Link } from 'react-router-dom';

import useFetch from './useFetch';
import SmallCard from './SmallCard';


import './ItemsTable.css'

const ItemsTable = () => {

    const items = useFetch('http://134.209.138.34/items');
    
    const cards = items.map((item) => {
        return (
            <Link to={`/item/${item.id}`} className='cardLink' key={item.id} >
                <SmallCard item={item} />
            </Link>
        )
    });
    return (
        <section className='cards-grid'>
            {cards}
        </section>
    )
}

export default ItemsTable;