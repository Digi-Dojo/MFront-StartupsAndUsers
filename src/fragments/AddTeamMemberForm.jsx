import {useAllStartups} from "../hooks/useAllStartups";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import {useState} from "react";


export const AddTeamMemberForm = () => {
    const startups = useAllStartups()
    const [selectedStartup, setSelectedStartup] = useState("");

    const handleSelectChange = (event) => {
        setSelectedStartup(event.target.value);
    };

    return (
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
    );

}