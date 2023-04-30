import { useState} from "react"
import axios from 'axios';

export const useListUsersFromStartup = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const listUsers = async (listUsersDTO) => {
        setLoading(true);

        try {
            console.log(listUsersDTO)
            const response = await axios.get('/v1/teammembers/getAllUsersForStartup', listUsersDTO);
            setLoading(false);
            setError(null);
            return response.data;
        } catch (err) {
            setLoading(false);
            setError(err.response.data.error);
            return null;
        }
    };

    return {loading, error, listUsers};
};