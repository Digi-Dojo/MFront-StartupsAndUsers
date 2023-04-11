import {TextField, Button, Grid, Alert} from "@mui/material";
import {useEffect, useState} from "react";
import {Title} from "../components/Title";
import {useUpdatePassword} from "../hooks/useUpdatePassword";


export const ChangePasswordForm = () => {

    const [updatedUser, setUpdatedUser] = useState(null)
    const {loading, error, updatePassword} = useUpdatePassword()
    const [disableSubmitButton, setDisableSubmitButton] = useState(false)
    const [formData, setFormData] = useState({
        mailAddress: '',
        oldPassword: '',
        newPassword: ''
    });

    useEffect(() => {
        setDisableSubmitButton(Object.values(formData).some(x => x === ''));
    }, [formData]);

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await updatePassword(formData)
        console.log(response)
        setUpdatedUser(response)
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setDisableSubmitButton( Object.values(formData).some(x => ( x === '')))
        console.log(formData);
    };

    return <main>
        <Title secondary>Change Password</Title>
        {updatedUser === null &&
            <form>
                <Grid container rowSpacing={3} >
                    <Grid item xs={12}>
                        <TextField name="mailAddress" required id="outlined-basic" label="Mail Address"
                                   variant="outlined"
                                   onChange={handleChange}
                                   value={formData.mailAddress} fullWidth/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="oldPassword" required id="outlined-basic" label="Old Password" variant="outlined"
                                   onChange={handleChange}
                                   value={formData.password}
                                   fullWidth
                                   type="password"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField name="newPassword" required id="outlined-basic" label="New Password" variant="outlined"
                                   onChange={handleChange}
                                   value={formData.password}
                                   fullWidth
                                   type="password"
                        />
                    </Grid>
                    <Grid item container justify="center">
                        <Button size="large" variant="contained" disabled={loading || disableSubmitButton}
                                onClick={handleSubmit}>Reset</Button>
                    </Grid>
                </Grid>
            </form>
        }
        {error != null &&
            <Alert variant="outlined" severity="error" style={{ marginTop: '16px' }}> An error occured: {error}</Alert>
        }
        {updatedUser != null &&
            <Alert variant="outlined" severity="success" style={{ marginTop: '16px' }}>Password of User {updatedUser.name} was successfully updated</Alert>
        }
    </main>
};