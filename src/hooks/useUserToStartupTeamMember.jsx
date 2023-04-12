// import {useState} from 'react';
// import axios from 'axios'
//
// export const useUserToStartupTeamMember = () => {
//
//     const [loading, setLoading] = useState(false);
//     const [error, setError] = useState(null);
//
//     const addUser = async (addUserDTO) => {
//         setLoading(true);
//
//         try {
//             const response = await axios.post('/v1/teammembers/create', addUserDTO);
//             setLoading(false);
//             setError(null);
//             return response.data;
//         } catch (err) {
//             setLoading(false);
//             setError(err.response.data.error);
//             return null;
//         }
//     };
//
//     return { loading, error, addUser };
// };