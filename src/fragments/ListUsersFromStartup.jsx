import {useEffect, useState} from "react";
import {FormControl, Grid, MenuItem, Select, InputLabel, Button} from "@mui/material";
import {useListUsersFromStartup} from "../hooks/useListUsersFromStartup"
import {useAllStartups} from "../hooks/useAllStartups";
import {Title} from "../components/Title";
import React from 'react';
import {ErrorAlert} from "../components/ErrorAlert";

export const ListUsersFromStartup = () => {

    const startups = useAllStartups()
    const [selectedStartup, setSelectedStartup] = useState("");
    const {loading, error, listUsers} = useListUsersFromStartup()
    const [users, setUsers] = useState(null);
    const [formData, setFormData] = useState({
        startupId: '',
    })

    const handleSubmit = async (e) => {
        console.log('here the users:')
        e.preventDefault();
        const response = await listUsers(formData)
        setUsers(response)
        console.log(users)
    }

    const handleSelectChange = (e) => {
        setSelectedStartup(e.target.value);
        setFormData({
            ...formData,
            startupId: e.target.value.id,
        })
        console.log(e.target.value)
    };

    useEffect(() => {

    }, [formData]);

    return (
        <main>
            <Title secondary>List the users for given startup</Title>
            <form>
                <Grid container rowSpacing={3}>
                    <Grid item xs={12}>
                        <FormControl variant="outlined" fullWidth>
                            <InputLabel>Select a Startup</InputLabel>
                            <Select
                                value={selectedStartup}
                                onChange={handleSelectChange}
                                label="Select a Startup"
                            >
                                {startups.map((startup) => (
                                    <MenuItem key={startup.id} value={startup}>
                                        {startup.name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Grid>
                    {users != null &&
                        <Grid item xs={12}>
                            <ul>
                                {users.map((user) => (
                                    <li key={user.id} value={user}>{user.name}</li>
                                ))}
                            </ul>
                        </Grid>
                    }
                    <Grid item container justify="center">
                        <Button size="large" variant="contained"
                                onClick={handleSubmit}
                        >List</Button>
                    </Grid>
                    <ErrorAlert error={error}/>
                </Grid>
            </form>
        </main>
    );
}