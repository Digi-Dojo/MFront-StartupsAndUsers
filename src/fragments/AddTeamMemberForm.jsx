import {useAllStartups} from "../hooks/useAllStartups";
import {Alert, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import {Title} from "../components/Title";
import {useCreateTeamMember} from "../hooks/useCreateTeamMember";
import Gravatar from 'react-gravatar'

export const AddTeamMemberForm = ({user}) => {
    const startups = useAllStartups()
    const [selectedStartup, setSelectedStartup] = useState("");
    const [disableSubmitButton, setDisableSubmitButton] = useState(true)
    const {loading, error, createTeamMember} = useCreateTeamMember()
    const [newTeamMember, setNewTeamMember] = useState(null);
    const [formData, setFormData] = useState({
        userId: '',
        role: '',
        startupId: ''
    });


    useEffect(() => {
        const newVal = user != null ? user.id : '';
        setFormData({
            ...formData,
            userId: newVal,
        });

    }, [user]);

    useEffect(() => {
        setDisableSubmitButton(Object.values(formData).some(x => x === ''));
    }, [formData]);

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await createTeamMember(formData)
        setNewTeamMember(response)
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectChange = (e) => {
        setSelectedStartup(e.target.value);
        setFormData({
            ...formData,
            startupId: e.target.value.id,
        })
    };


//     const email = "https://www.gravatar.com/avatar/" + md5((user.mailAddress.trim()).toLowerCase());

    return (
        <main>
            <Title secondary>Add Team Member</Title>
            <p>User: {user != null &&  <span>
                {user.name}
                <Gravatar email={user.mailAddress} />
            </span>}</p>
            {newTeamMember === null &&
                <form>
                    <Grid container rowSpacing={3}>
                        <Grid item xs={12}>
                            <TextField name="role" required id="outlined-basic" label="Role" variant="outlined"
                                       onChange={handleChange}
                                       value={formData.password}
                                       fullWidth
                            />
                        </Grid>
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
                        <Grid item container justify="center">
                            <Button size="large" variant="contained" disabled={loading || disableSubmitButton}
                                    onClick={handleSubmit}
                            >Add</Button>
                        </Grid>
                    </Grid>
                </form>
            }
            {error != null &&
                <Alert variant="outlined" severity="error" style={{marginTop: '16px'}}> An error
                    occured: {error}</Alert>
            }
            {newTeamMember != null &&
                <Alert variant="outlined" severity="success" style={{marginTop: '16px'}}>You were successfully added as
                    a member to the startup {selectedStartup.name} with role {newTeamMember.role} </Alert>
            }

        </main>
    );

}