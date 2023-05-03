import {MenuItem} from "@mui/material";
import React from "react";
import {csCZ} from "@mui/material/locale";

export const ListStartups = ({startups}) =>{

    const isArray = Array.isArray(startups);
    console.log(startups)
    if(isArray){
        return(startups.map((startup) => (
            <MenuItem key={startup.id} value={startup}>
                {startup.name}
            </MenuItem>
        )))
    }

}