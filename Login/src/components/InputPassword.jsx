import {Grid, TextField} from "@mui/material";

export const InputPassword = ({ formData, handleChange }) => {
    // field rendering
    return (
        <Grid item xs={12}>
            <TextField
                name="password"
                required
                id="outlined-basic"
                label="Password"
                variant="outlined"
                onChange={handleChange}
                value={formData.password}
                fullWidth
                type="password"
            />
        </Grid>
    );
}
