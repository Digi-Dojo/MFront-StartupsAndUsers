import React from "react";
import {Title} from "./Title";
import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import {UserList} from "./UserList";
import {ErrorAlert} from "./ErrorAlert";

export const ListUsersFromStartupForm = ({selectedStartup, handleSelectChange, startups, users, error}) => {
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
                    <UserList users={users}/>
                    <ErrorAlert error={error}/>
                </Grid>
            </form>
        </main>
    );


    //todo: move the html form from the fragment to this component to improve componentization
}