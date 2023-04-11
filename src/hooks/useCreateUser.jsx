import {useState} from 'react';
import axios from 'axios';

export const useCreateUser = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const registerUser = async (userDTO) => {
        setLoading(true);

        try {
            const response = await axios.post('/v1/users/create', userDTO);
            setLoading(false);
            setError(null);
           return response.data;
        } catch (err) {
            setLoading(false);
            setError(err.response.data.error);
            return null;
        }
    };

    return { loading, error, registerUser };
};