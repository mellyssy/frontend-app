import React, {useEffect, useState} from 'react';
import axios from "axios";
import CardDetails from "./CardDetails";

const ITEM_URL = 'http://134.209.138.34/item/1849621339';


function CardDetailsHooks() {
    const [data, setData] = useState({ });

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await axios.get(ITEM_URL);
                setData(response.data[0]);
            } catch (e) {
                console.log(e);
            }
        };
        fetchItems();
    }, []);

    return <CardDetails data={data} />
}

export default CardDetailsHooks;
