import React, {useEffect, useState} from 'react';
import axios from "axios";
import ItemsTable from "./ItemsTable";

const ITEMS_URL = 'http://134.209.138.34/items';


function ItemsTableHooks() {
    const [data, setData] = useState({items: [], isFetching: false});

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setData({items: data.items, isFetching: true});
                const response = await axios.get(ITEMS_URL);
                setData({items: response.data, isFetching: false});
            } catch (e) {
                console.log(e);
                setData({items: data.items, isFetching: false});
            }
        };
        fetchItems();
    }, []);

    return <ItemsTable data={data.items} isFetching={data.isFetching} />
}

export default ItemsTableHooks
