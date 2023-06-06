import {useState, useEffect} from "react";
import {useCreate} from "./hooks/useCreate";
import Title from "./components/Title";
import {Alert, Button, Grid, TextField} from "@mui/material";
import ErrorAlert from "./components/ErrorAlert";


const CreateStartUp = () => {

    const [createdStartUp, setCreatedStartUp] = useState(null)
    const {loading, error, createNew} = useCreate();
    const [disableSubmitButton, setDisableSubmitButton] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await createNew(formData, "startup/create")
        setCreatedStartUp(response)
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

    return (
        <div>
            <Title secondary>Create new Startup</Title>
            {createdStartUp === null &&
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
            {createdStartUp != null &&
                <Alert variant="outlined" severity="success" style={{ marginTop: '16px' }}> Startup {createdStartUp.name} was successfully created</Alert>
                //todo: add button to continue or do something next
            }
        </div>
    )
};

export default CreateStartUp;