import {Title} from "./Title";
import {Alert, Grid} from "@mui/material";
import {InputMail} from "./InputMail";
import {InputPassword} from "./InputPassword";
import {SubmitButton} from "./SubmitButton";
import {ErrorAlert} from "./ErrorAlert";

export const LoginForm = ({loggedUser, formData, loading, disableSubmitButton, error, handleSubmit, handleChange}) => {
    return <main>
        <Title secondary>Login</Title>
        {loggedUser === null &&
            <form>
                <Grid container rowSpacing={3}>
                    <InputMail formData={formData} handleChange={handleChange}></InputMail>
                    <InputPassword formData={formData} handleChange={handleChange}/>
                    <SubmitButton name="Login" loading={loading} disableSubmitButton={disableSubmitButton} handleSubmit={handleSubmit} />
                </Grid>
            </form>
        }
        <ErrorAlert error={error}/>
        {loggedUser != null &&
            <Alert variant="outlined" severity="success" style={{marginTop: '16px'}}> User {loggedUser.name} is logged
                in</Alert>
        }
    </main>
}