import {Grid, TextField} from "@mui/material";

export const InputMail = ({ formData, handleChange }) => {
    // field rendering
    return (
        <Grid item xs={12}>
            <TextField
                name="mailAddress"
                required
                id="outlined-basic"
                label="Mail Address"
                variant="outlined"
                onChange={handleChange}
                value={formData.mailAddress}
                fullWidth
            />
        </Grid>
    );
}

