import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

export const useUserFromCookie = () => {
    const [loggedUser, setLoggedUser] = useState(null);

    useEffect(() => {
        const userCookie = Cookies.get('user');
        if(userCookie) {
            setLoggedUser(JSON.parse(userCookie));
        }
    }, []);

    return loggedUser;
};
