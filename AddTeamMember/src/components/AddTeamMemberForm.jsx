import {Title} from "./Title";
import {Alert, Button, Grid, TextField} from "@mui/material";
import {ErrorAlert} from "./ErrorAlert";
import {SelectStartups} from "./SelectStartups";
import {UserComponent} from "./UserComponent";

export const AddTeamMemberForm = ({startups, loggedUser, newTeamMember, formData, handleChange, handleSubmit, error, loading, disableSubmitButton, selectedStartup, handleSelectChange}) => {
    return (
        <main>
            <Title secondary>Add Team Member</Title>
            <UserComponent loggedUser={loggedUser}></UserComponent>
                <form>
                    <Grid container rowSpacing={3}>
                        <Grid item xs={12}>
                            <TextField name="role" required id="outlined-basic" label="Role" variant="outlined"
                                       onChange={handleChange}
                                       value={formData.password}
                                       fullWidth
                            />
                        </Grid>
                        <SelectStartups selectedStartup={selectedStartup} handleSelectChange={handleSelectChange} startups={startups} />
                        <Grid item container justify="center">
                            <Button size="large" variant="contained" disabled={loading || disableSubmitButton}
                                    onClick={handleSubmit}
                            >Add</Button>
                        </Grid>
                    </Grid>
                </form>
            <ErrorAlert error={error} />
            {newTeamMember != null &&
                <Alert variant="outlined" severity="success" style={{marginTop: '16px'}}>You were successfully added as
                    a member to the startup {selectedStartup.name} with role {newTeamMember.role} </Alert>
            }
        </main>
    );

}