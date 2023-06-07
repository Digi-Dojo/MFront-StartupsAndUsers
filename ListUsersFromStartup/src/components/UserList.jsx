import React from 'react';
import {Divider, List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";
import Gravatar from "react-gravatar";


export const UserList = ({users}) => {
    if (users != null) {
        return (
            <List>
                {users.map((user, index) => (
                    <React.Fragment key={user.id}>
                        <ListItem alignItems="flex-start">
                            <ListItemAvatar>
                                <Gravatar email={user.mailAddress} size={30}/>
                            </ListItemAvatar>
                            <ListItemText
                                primary={user.name}
                                secondary={user.mailAddress}
                            />
                        </ListItem>
                        {index !== users.length - 1 && <Divider variant="inset" component="li"/>}
                    </React.Fragment>
                ))}
            </List>
        );
    }else{
        return <></>
    }
};
