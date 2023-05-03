import {useEffect, useState} from "react";
import {useListUsersFromStartup} from "../hooks/useListUsersFromStartup"
import {useAllStartups} from "../hooks/useAllStartups";
import React from 'react';
import {ListUsersFromStartupForm} from "../components/ListUsersFromStartupForm";

export const ListUsersFromStartup = () => {

    const startups = useAllStartups()
    const [selectedStartup, setSelectedStartup] = useState('');
    const {error, listUsers} = useListUsersFromStartup();
    const [users, setUsers] = useState(null);

    const fetchData = async () => {
        const response = await listUsers(selectedStartup.id)
        setUsers(response.data)
    }
    useEffect(() => {
        if (selectedStartup !== '') {
            fetchData()
        }
    }, [selectedStartup]);

    const handleSelectChange = (e) => {
        setSelectedStartup(e.target.value);
    };


   return(
       <ListUsersFromStartupForm selectedStartup={selectedStartup} error={error} handleSelectChange={handleSelectChange} users={users} startups={startups} />
   )
}