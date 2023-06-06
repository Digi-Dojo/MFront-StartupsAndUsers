
import {Alert, Button, Grid, TextField} from "@mui/material";
import Title from "./Title";
import ErrorAlert from "./ErrorAlert";


const CreateStartUpForm = ({registeredStartUp, error, loading, disableSubmitButton, formData, handleChange, handleSubmit}) => {
    return (
        <section>
        <Title secondary>Create new Startup</Title>
        {registeredStartUp === null &&
            <form>
                <Grid container rowSpacing={3} >
                    <Grid item xs={12}>
                        <TextField name="name" required id="outlined-basic" label="Name" variant="outlined"
                                   onChange={handleChange}
                                   value={formData.name} fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="description" required id="outlined-basic" label="description"
                                   variant="outlined"
                                   onChange={handleChange}
                                   value={formData.description} fullWidth/>
                    </Grid>
                    <Grid item container justify="center">
                        <Button size="large" variant="contained" disabled={loading || disableSubmitButton}
                                onClick={handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        }
        <ErrorAlert error={error} />
        {registeredStartUp != null &&
            <Alert variant="outlined" severity="success" style={{ marginTop: '16px' }}> Startup {registeredStartUp.name} was successfully created</Alert>
            //todo: add button to continue or do something next
        }
    </section>
    )
};

export default CreateStartUpForm;