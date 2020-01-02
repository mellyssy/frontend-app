import React from 'react';
import SmallCard from './smallCard';

const ItemsTable = (props) => {
    const cards = props.data.map((item) => {
        return <SmallCard key={item.id} item={item} />
    });
    return (
        <section>
            {cards}
        </section>
    )
}

export default ItemsTable;