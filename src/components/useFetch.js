import {useEffect, useState} from 'react';
import axios from "axios";

function useFetch(url) {

    const [data, setData] = useState({items: []});

    useEffect(() => {
        const fetchItems = async () => {
            try {
                setData({items: []});
                const response = await axios.get(url);
                setData({items: response.data});
            } catch (e) {
                console.log(e);
                setData({items: []});
            }
        };
        fetchItems();
    }, []);

    return data.items;
}

export default useFetch;