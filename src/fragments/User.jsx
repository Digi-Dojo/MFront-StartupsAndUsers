import Gravatar from "react-gravatar";
import {useContext} from "react";
import {UserContext} from "../components/UserContext";
import {Paper} from "@mui/material";

export const User = () => {
    const {loggedUser} = useContext(UserContext);
    if (loggedUser != null) {
        return (
            <Paper variant="outlined"
                   style={{padding: '1rem', marginTop: '1rem', marginBottom: '1rem', maxWidth: '300px'}}>
                <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                    <span style={{fontWeight: 'bold', marginRight: '0.5rem'}}>
                      {loggedUser.name}
                    </span>
                    <div style={{borderRadius: '10%', overflow: 'hidden', marginLeft: '0.5rem'}}>
                        <Gravatar email={loggedUser.mailAddress} size={30}/>
                    </div>
                </div>
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