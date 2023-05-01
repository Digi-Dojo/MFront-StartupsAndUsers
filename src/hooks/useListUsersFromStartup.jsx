import { useState} from "react"
import axios from 'axios';

export const useListUsersFromStartup = () => {
    const [error, setError] = useState(null);

    const listUsers = async (startupId) => {
        try {
            console.log(startupId)
            const response = await axios.get(`/v1/teammembers/startup/${startupId}`);
            setError(null);
            return response.data;
        } catch (err) {
            setError(err.response.data.error);
            return null;
        }
    };

    return { error, listUsers};
};