import {UserComponent} from "./components/UserComponent";
import {useUserFromCookie} from "./hooks/useUserFromCookie";

export const User = () => {
    const loggedUser = useUserFromCookie();
    return <UserComponent loggedUser={loggedUser} />
}