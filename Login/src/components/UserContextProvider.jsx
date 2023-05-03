import {useEffect, useState} from "react";
import {UserContext} from "./UserContext";

export const UserContextProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        setLoggedUser(JSON.parse(sessionStorage.getItem('userContext')));
        console.log("getState")
    }, []);

    const updateUser = (user) => {
        setLoggedUser(user)
        sessionStorage.setItem('userContext', JSON.stringify(user));
    }

    return (
        <UserContext.Provider value={{ loggedUser, updateUser }}>
            {children}
        </UserContext.Provider>
    );
};
