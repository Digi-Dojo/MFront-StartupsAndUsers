import { useEffect, useState } from "react"
import axios from 'axios';

export const useListUsersFromStartup = () => {
    const [users, setUsers] = useState([]);

    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async (listUsersDTO) => {
        setIsLoading(true);

          try {
            const response = await axios.get('/v1/teammembers/startup/getAllUsers', listUsersDTO);

            setUsers(response)
          } catch (error) {
            setError(error)
            console.error(error);
          } finally{
            setIsLoading(false);
          }
        };

        fetchUsers();
      }, [users]);

      return {loading, error, users};
};