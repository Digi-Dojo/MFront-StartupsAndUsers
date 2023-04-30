import {Button, Grid} from "@mui/material";

export const SubmitButton = ({ name, loading, disableSubmitButton, handleSubmit }) => {
    // button rendering
    return (
        <Grid item container justify="center">
            <Button
                size="large"
                variant="contained"
                disabled={loading || disableSubmitButton}
                onClick={handleSubmit}
            >
                {name}
            </Button>
        </Grid>
    );
}