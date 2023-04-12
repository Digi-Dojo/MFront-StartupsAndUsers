import { useEffect, useState } from "react"
import axios from 'axios';

export const useAllStartups = () => {
    const [startups, setStartups] = useState([]);

    async function fetch() {
        const { data } = await axios.get('/v1/startup/getAll');
        setStartups(data);
    }

    function fetchStartups() {
        fetch();
    }

    useEffect(fetchStartups, []);

    return startups;
};
