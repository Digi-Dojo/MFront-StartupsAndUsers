import {Title} from "./Title";
import {Alert, Grid, TextField} from "@mui/material";
import {InputMail} from "./InputMail";
import {SubmitButton} from "./SubmitButton";
import {ErrorAlert} from "./ErrorAlert";

export const ChangePasswordForm = ({formData, updatedUser, handleChange, handleSubmit, disableSubmitButton, loading, error}) => {
    return <main>
        <Title secondary>Change Password</Title>
        {updatedUser === null &&
            <form>
                <Grid container rowSpacing={3} >
                    <InputMail formData={formData} handleChange={handleChange}  ></InputMail>
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
                    <SubmitButton name="Reset" loading={loading} disableSubmitButton={disableSubmitButton} handleSubmit={handleSubmit} />
                </Grid>
            </form>
        }
        <ErrorAlert error={error} />
        {updatedUser != null &&
            <Alert variant="outlined" severity="success" style={{ marginTop: '16px' }}>Password of User {updatedUser.name} was successfully updated</Alert>
        }
    </main>
}