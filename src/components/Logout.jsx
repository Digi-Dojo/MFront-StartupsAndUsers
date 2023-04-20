import {useContext} from "react";
import {UserContext} from "./UserContext";
import {Button, Grid} from "@mui/material";

export const Logout = () => {
    const {loggedUser, updateUser} = useContext(UserContext);

    const handleLogout = () => {
        updateUser(null)
    }

    return <main>
        <form>
            <Grid item xs={12} container justify="center">
                <Button size="large" variant="contained" disabled={loggedUser === null}
                        onClick={handleLogout}>Logout</Button>
            </Grid>
        </form>
    </main>
}