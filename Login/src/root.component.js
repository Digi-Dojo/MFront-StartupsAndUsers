import {useEffect, useState} from "react";
import {useCreate} from "./hooks/useCreate";
import {LoginForm} from "./components/LoginForm";
import Cookies from 'js-cookie';

export default function Login() {
    const [loggedUser, setLoggedUser] = useState(null)
    const {loading, error, createNew} = useCreate()
    const [disableSubmitButton, setDisableSubmitButton] = useState(false)
    const [formData, setFormData] = useState({
        password: '',
        mailAddress: '',
    });

    useEffect(() => {
        const userCookie = Cookies.get('user');
        if(userCookie) {
            setLoggedUser(JSON.parse(userCookie));
        }
    }, []);

    useEffect(() => {
        if (loggedUser) {

            Cookies.set('user', JSON.stringify(loggedUser), {expires: 7}); // Save loggedUser in a cookie
        }
    }, [loggedUser]);

    useEffect(() => {
        setDisableSubmitButton(Object.values(formData).some(x => x === ''));
    }, [formData]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await createNew(formData, "users/login")
        setLoggedUser(response)
        location.reload();
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };
    return <LoginForm disableSubmitButton={disableSubmitButton} error={error} loading={loading} loggedUser={loggedUser}
                      formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
};
