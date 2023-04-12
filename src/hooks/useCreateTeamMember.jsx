import {useState} from 'react';
import axios from 'axios';

export const useCreateTeamMember = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const createTeamMember = async (teamMemberDTO) => {
        setLoading(true);

        try {
            const response = await axios.post('/v1/teammembers/create', teamMemberDTO);
            setLoading(false);
            setError(null);
           return response.data;
        } catch (err) {
            setLoading(false);
            setError(err.response.data.error);
            return null;
        }
    };

    return { loading, error, createTeamMember };
};