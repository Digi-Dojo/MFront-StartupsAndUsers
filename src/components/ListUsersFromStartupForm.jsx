import React from "react";
import {Title} from "./Title";
import { Grid} from "@mui/material";
import {UserList} from "./UserList";
import {ErrorAlert} from "./ErrorAlert";
import {SelectStartups} from "./SelectStartups";

export const ListUsersFromStartupForm = ({selectedStartup, handleSelectChange, startups, users, error}) => {
    return (
        <main>
            <Title secondary>List the users for given startup</Title>
            <form>
                <Grid container rowSpacing={3}>
                    <SelectStartups selectedStartup={selectedStartup} handleSelectChange={handleSelectChange} startups={startups} />
                    <UserList users={users}/>
                    <ErrorAlert error={error}/>
                </Grid>
            </form>
        </main>
    );


    //todo: move the html form from the fragment to this component to improve componentization
}