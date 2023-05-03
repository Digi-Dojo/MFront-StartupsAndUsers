import Gravatar from "react-gravatar";
import {useContext} from "react";
import {UserContext} from "./components/UserContext";
import {ListItem, ListItemAvatar, ListItemText, Paper} from "@mui/material";

export default function User() {
    const {loggedUser} = useContext(UserContext);
    if (loggedUser != null) {
        return (
            <Paper variant="outlined"
                   style={{padding: '1rem', marginTop: '1rem', marginBottom: '1rem', maxWidth: '300px'}}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar style={{flex: 'none'}}>
                        <Gravatar email={loggedUser.mailAddress} size={30}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary={loggedUser.name}
                        secondary={loggedUser.mailAddress}
                        style={{flex: 'auto'}}
                    />
                </ListItem>
            </Paper>
        );
    } else {
        return <Paper variant="outlined"
                      style={{padding: '1rem', marginTop: '1rem', marginBottom: '1rem', maxWidth: '300px'}}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <span style={{fontWeight: 'bold', marginRight: '0.5rem'}}>
                      No user logged in
                    </span>
            </div>
        </Paper>
    }


}