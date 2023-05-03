import {Title} from "./Title";
import {User} from "../fragments/User";
import {Alert, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";
import {ErrorAlert} from "./ErrorAlert";

export const AddTeamMemberForm = ({startups, loggedUser, newTeamMember, formData, handleChange, handleSubmit, error, loading, disableSubmitButton, selectedStartup, handleSelectChange}) => {
    return (
        <main>
            <Title secondary>Add Team Member</Title>
            <User loggedUser={loggedUser}></User>
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
                                    {startups !== null&&
                                        startups.map((startup) => (
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
            <ErrorAlert error={error} />
            {newTeamMember != null &&
                <Alert variant="outlined" severity="success" style={{marginTop: '16px'}}>You were successfully added as
                    a member to the startup {selectedStartup.name} with role {newTeamMember.role} </Alert>
            }

        </main>
    );

}