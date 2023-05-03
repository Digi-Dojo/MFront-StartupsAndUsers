import { useEffect, useState } from "react"
import axios from 'axios';

export const useAllStartups = () => {
    const [startups, setStartups] = useState([]);

    async function fetch() {
        const { data } = await axios.get('/v1/startup/getAll');
        console.log(data)
        setStartups(data);
    }

    function fetchStartups() {
        fetch();
    }

    useEffect(fetchStartups, []);

    console.log(startups)
    return startups;
};
