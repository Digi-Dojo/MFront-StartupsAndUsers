import {FormControl, Grid, InputLabel, MenuItem, Select} from "@mui/material";
import React from "react";

export const SelectStartups = ({startups, selectedStartup, handleSelectChange}) =>{

    return(<Grid item xs={12}>
        <FormControl variant="outlined" fullWidth>
            <InputLabel>Select a Startup</InputLabel>
            <Select
                value={selectedStartup}
                onChange={handleSelectChange}
                label="Select a Startup"
            >
                {Array.isArray(startups)&&
                    startups.map((startup) => (
                        <MenuItem key={startup.id} value={startup}>
                            {startup.name}
                        </MenuItem>
                    ))}
            </Select>
        </FormControl>
    </Grid>)

}