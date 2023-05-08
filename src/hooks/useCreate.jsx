import {useState} from 'react';
import axios from "../utils/axios";



export const useCreate = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createNew = async (operationDTO, path) => {
        setLoading(true);

        try {
            const response = await axios.post('/v1/'+ path, operationDTO);
            setLoading(false);
           return response.data;
        } catch (err) {
            setLoading(false);
            setError(err.response.data.error);
            return null;
        }
    };

    return { loading, error, createNew };
};