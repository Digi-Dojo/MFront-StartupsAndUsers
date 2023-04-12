import {useState} from 'react';
import axios from 'axios';

export const useCreateStartUp = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const registerStartUp = async (createStartupDTO) => {
        setLoading(true);

        try {
            const response = await axios.post('/v1/startup/create', createStartupDTO);
            setLoading(false);
           return response.data;
        } catch (err) {
            setLoading(false);
            setError(err.response.data.error);
            return null;
        }
    };

    return { loading, error, registerStartUp };
};