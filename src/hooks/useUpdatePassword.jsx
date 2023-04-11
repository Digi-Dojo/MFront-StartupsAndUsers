import {useState} from 'react';
import axios from 'axios'

export const useUpdatePassword = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const updatePassword = async (updatePasswordDTO) => {
        setLoading(true);

        try {
            const response = await axios.post('/v1/users/updatePassword', updatePasswordDTO);
            setLoading(false);
            setError(null);
            return response.data;
        } catch (err) {
            setLoading(false);
            setError(err.response.data.error);
            return null;
        }
    };

    return { loading, error, updatePassword };
};