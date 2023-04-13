import {TextField, Button, Grid, Alert} from "@mui/material";
import {useEffect, useState} from "react";
import {Title} from "../components/Title";
import {useLogin} from "../hooks/useLogin";


export const LoginForm = (props) => {

    const [loggedUser, setLoggedUser] = useState(null)
    const {loading, error, login} = useLogin()
    const [disableSubmitButton, setDisableSubmitButton] = useState(false)
    const [formData, setFormData] = useState({
        password: '',
        mailAddress: '',
    });


    useEffect(() => {
        if (loggedUser) {
            props.updateUser(loggedUser);
        }
    }, [loggedUser]);

    useEffect(() => {
        setDisableSubmitButton(Object.values(formData).some(x => x === ''));
    }, [formData]);

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await login(formData)
        console.log(response)
        setLoggedUser(response)
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return <main>
        <Title secondary>Login</Title>
        {loggedUser === null &&
            <form>
                <Grid container rowSpacing={3} >
                    <Grid item xs={12}>
                        <TextField name="mailAddress" required id="outlined-basic" label="Mail Address"
                                   variant="outlined"
                                   onChange={handleChange}
                                   value={formData.mailAddress} fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="password" required id="outlined-basic" label="Password" variant="outlined"
                                   onChange={handleChange}
                                   value={formData.password} fullWidth type="password"/>
                    </Grid>
                    <Grid item container justify="center">
                        <Button size="large" variant="contained" disabled={loading || disableSubmitButton}
                                onClick={handleSubmit}>Login</Button>
                    </Grid>
                </Grid>
            </form>
        }
        {error != null &&
            <Alert variant="outlined" severity="error" style={{ marginTop: '16px' }}> Error: {error} </Alert>
        }
        {loggedUser != null &&
            <Alert variant="outlined" severity="success" style={{ marginTop: '16px' }}> User {loggedUser.name} is loged in</Alert>
            //todo: add button to continue or do something next
        }
    </main>
};