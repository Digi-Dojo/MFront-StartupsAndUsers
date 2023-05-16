import axios from "../utils/axios";


export const useAllStartups = () => {

    const getStartups = async () => {
        const response = await axios.get('/v1/startup/getAll');
        return response.data;
    }


    return {getStartups};
};
