import {useState} from 'react';
import axios from 'axios'

export const useLogin = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (userDTO) => {
        setLoading(true);

        try {
            const response = await axios.post('/v1/users/login', userDTO);
            setLoading(false);
            setError(null);
            return response.data;
        } catch (err) {
            setLoading(false);
            setError(err.response.data.error);
            return null;
        }
    };

    return { loading, error, login };
};