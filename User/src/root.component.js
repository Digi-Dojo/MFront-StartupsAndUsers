import {useContext} from "react";
import {UserContext} from "./components/UserContext";
import {UserComponent} from "./components/UserComponent";

export const User = () => {
    const {loggedUser} = useContext(UserContext);
    return (<UserComponent loggedUser={loggedUser} />);
}