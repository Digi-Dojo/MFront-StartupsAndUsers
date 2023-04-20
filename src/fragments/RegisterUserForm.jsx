import {TextField, Button, Grid, Alert} from "@mui/material";
import {useContext, useEffect, useState} from "react";
import {Title} from "../components/Title";
import {useCreateUser} from "../hooks/useCreateUser";
import {UserContext} from "../components/UserContext";


export const RegisterUserForm = () => {

    const [registeredUser, setRegisteredUser] = useState(null)
    const {loading, error, registerUser} = useCreateUser()
    const [disableSubmitButton, setDisableSubmitButton] = useState(false)
    const {updateUser} = useContext(UserContext)
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        mailAddress: '',
    });

    useEffect(() => {
        if (registeredUser) {
            updateUser(registeredUser);
        }
    }, [registeredUser, updateUser]);


    useEffect(() => {
        setDisableSubmitButton(Object.values(formData).some(x => x === ''));
    }, [formData]);

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await registerUser(formData)
        console.log(response)
        setRegisteredUser(response)
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return <main>
        <Title secondary>Register User</Title>
        {registeredUser === null &&
            <form>
                <Grid container rowSpacing={3} >
                    <Grid item xs={12}>
                        <TextField name="name"
                                   required
                                   id="outlined-basic"
                                   label="Name"
                                   variant="outlined"
                                   onChange={handleChange}
                                   value={formData.name} fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="mailAddress" required id="outlined-basic" label="Mail Address"
                                   variant="outlined"
                                   onChange={handleChange}
                                   value={formData.mailAddress} fullWidth/>
                    </Grid>
                    <Grid item xs={12}>

                        <TextField name="password" required id="outlined-basic" label="Password" variant="outlined"
                                   onChange={handleChange}
                                   value={formData.password}
                                   fullWidth
                                   type="password"
                        />
                    </Grid>
                    <Grid item container justify="center">
                        <Button size="large" variant="contained" disabled={loading || disableSubmitButton}
                                onClick={handleSubmit}>Register</Button>
                    </Grid>
                </Grid>
            </form>
        }
        {error != null &&
            <Alert variant="outlined" severity="error" style={{ marginTop: '16px' }}> An error occured: {error}</Alert>
        }
        {registeredUser != null &&
            <Alert variant="outlined" severity="success" style={{ marginTop: '16px' }}> User {registeredUser.name} was successfully registered</Alert>
            //todo: add button to continue or do something next
        }
    </main>
};