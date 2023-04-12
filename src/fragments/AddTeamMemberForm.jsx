import {useAllStartups} from "../hooks/useAllStartups";
import {useAllUsers} from "../hooks/useAllUsers";
import {FormControl, MenuItem, Select} from "@mui/material";
import {useState} from "react";
// import {Button} from "@mui/material";
// import {useEffect} from "react";
import {Title} from "../components/Title";
// import {useUserToStartupTeamMember} from "../hooks/useUserToStartupTeamMember"


export const AddTeamMemberForm = () => {
    const startups = useAllStartups()
    const users = useAllUsers()

    const [selectedStartup, setSelectedStartup] = useState("");
    const [selectedUser, setSelectedUser] = useState("");
//     const {loading, error, addUserToStartupTeamMember} = addUserToStartupTeamMember()
//     const [disableSubmitButton, setDisableSubmitButton] = useState(false)

//     useEffect(() => {
//         setDisableSubmitButton(Object.values().some(x => x === ''));
//     }, []);

    const handleSelectChange = (event) => {
        setSelectedStartup(event.target.value);
    };

    const handleSelectChangeUser = (event) => {
        setSelectedUser(event.target.value);
    };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const response = await addUserToStartupTeamMember(selectedUser, selectedStartup)
//         console.log(response)
//         setSelectedUser(response)
//     };

    return (

        <FormControl variant="outlined" fullWidth>
            <Title primary>Add user to a team member for a startup</Title>

            <Title secondary>Select Startup</Title>
            <Select value={selectedStartup} onChange={handleSelectChange} label="Select a Startup">
                {startups.map((startup) => (
                    <MenuItem key={startup.id} value={startup}>
                        {startup.name}
                    </MenuItem>
                ))}
            </Select>

            <Title secondary>Select User</Title>
            <Select value={selectedUser} onChange={handleSelectChangeUser} label="Select a User">
                {users.map((user) => (
                    <MenuItem key={user.id} value={user}>
                        {user.name}
                    </MenuItem>
                ))}
            </Select>

{/*             <Button size="large" variant="contained" disabled={loading || disableSubmitButton} */}
{/*                     onClick={handleSubmit}>Add</Button> */}
        </FormControl>
    );

}