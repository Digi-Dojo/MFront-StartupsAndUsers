import {Button, Grid} from "@mui/material";
import Cookies from "js-cookie";
import {useUserFromCookie} from "./hooks/useUserFromCookie";

export default function Logout() {
    const loggedUser = useUserFromCookie();

    const handleLogout = () => {
        Cookies.remove('user');
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