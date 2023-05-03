import {MenuItem} from "@mui/material";
import React from "react";

export const ListStartups = ({startups}) =>{

    const isArray = Array.isArray(startups);
    if(isArray){
        return(startups.map((startup) => (
            <MenuItem key={startup.id} value={startup}>
                {startup.name}
            </MenuItem>
        )))
    }

}