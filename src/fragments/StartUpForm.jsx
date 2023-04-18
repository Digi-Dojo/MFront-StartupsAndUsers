import {TextField, Button, Grid, Alert} from "@mui/material";
import {useState, useEffect} from "react";
import {Title} from "../components/Title";
import {useCreateStartUp} from "../hooks/useCreateStartUp";


export const StartUpForm = () => {

    const [disableSubmitButton, setDisableSubmitButton] = useState(true)
    const [registeredStartUp, setRegisteredStartUp] = useState(null)
    const {loading, error, registerStartUp} = useCreateStartUp();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await registerStartUp(formData)
        setRegisteredStartUp(response)
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        setDisableSubmitButton(Object.values(formData).some(x => x === ''));
    }, [formData]);

    return <main>
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
                        <Button size="large" variant="contained" disabled={loading | disableSubmitButton}
                                onClick={handleSubmit}>Submit</Button>
                    </Grid>
                </Grid>
            </form>
        }
        {error != null &&
            <Alert variant="outlined" severity="error" style={{ marginTop: '16px' }}> An error occured: {error}</Alert>
        }
        {registeredStartUp != null &&
            <Alert variant="outlined" severity="success" style={{ marginTop: '16px' }}> Startup {registeredStartUp.name} was successfully created</Alert>
            //todo: add button to continue or do something next
        }
    </main>
};