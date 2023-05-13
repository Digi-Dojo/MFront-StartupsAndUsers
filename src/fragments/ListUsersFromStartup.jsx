import {useEffect, useState} from "react";
import {useListUsersFromStartup} from "../hooks/useListUsersFromStartup"
import {useAllStartups} from "../hooks/useAllStartups";
import React from 'react';
import {ListUsersFromStartupForm} from "../components/ListUsersFromStartupForm";

export const ListUsersFromStartup = () => {

    const {getStartups} = useAllStartups();
    const [startups, setStartups] = useState();
    const [selectedStartup, setSelectedStartup] = useState('');
    const {error, listUsers} = useListUsersFromStartup();
    const [users, setUsers] = useState(null);

    const loadStartups = async () => {
        const response = await getStartups();
        setStartups(response);
    }

    const getUsers = async () => {
        const response = await listUsers(selectedStartup.id)
        setUsers(response)
    }

    useEffect(() => {
        loadStartups();
    }, []);


    useEffect(() => {
        if (selectedStartup !== '') {
            getUsers()
        }
    }, [selectedStartup]);

    const handleSelectChange = (e) => {
        setSelectedStartup(e.target.value);
    };

   return(
       <ListUsersFromStartupForm selectedStartup={selectedStartup} error={error} handleSelectChange={handleSelectChange} users={users} startups={startups} />
   )
}