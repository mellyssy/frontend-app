import React from 'react';
import { useHistory } from 'react-router-dom';

import useFetch from './useFetch';
import SmallCard from './SmallCard';


import './ItemsTable.css'

const ItemsTable = () => {
    const history = useHistory();

    const items = useFetch('http://134.209.138.34/items');
    
    const goToCarddetails = (cardId) => {
        history.push(`/item/${cardId}`);
    }
    
    const cards = items.map((item) => {
        return (
            <a key={item.id} onClick={() => goToCarddetails(item.id)}>
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