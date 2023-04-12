import { useEffect, useState } from "react"
import axios from 'axios';

export const useAllUsers = () => {
    const [users, setUsers] = useState([]);

    async function fetch() {
        const { data } = await axios.get('/v1/users/getAll');
        setUsers(data);
    }

    function fetchUsers() {
        fetch();
    }

    useEffect(fetchUsers, []);

    return users;
};