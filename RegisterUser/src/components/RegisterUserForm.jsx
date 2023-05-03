import {Title} from "./Title";
import {Alert, Grid, TextField} from "@mui/material";
import {InputMail} from "./InputMail";
import {InputPassword} from "./InputPassword";
import {SubmitButton} from "./SubmitButton";
import {ErrorAlert} from "./ErrorAlert";


export const RegisterUserForm = ({registeredUser, formData, loading, error, disableSubmitButton, handleChange, handleSubmit}) => {
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
                    <InputMail formData={formData} handleChange={handleChange}  ></InputMail>
                    <InputPassword formData={formData} handleChange={handleChange} />
                    <SubmitButton handleSubmit={handleSubmit} loading={loading} disableSubmitButton={disableSubmitButton} name="Register" />
                </Grid>
            </form>
        }
        <ErrorAlert error={error} />
        {registeredUser != null &&
            <Alert variant="outlined" severity="success" style={{ marginTop: '16px' }}> User {registeredUser.name} was successfully registered</Alert>
            //todo: add button to continue or do something next
        }
    </main>
}