import {useContext, useEffect, useState} from "react";
import {useLogin} from "../hooks/useLogin";
import {UserContext} from "../components/UserContext";
import {LoginForm} from "../components/LoginForm";


export const Login = () => {
    const [loggedUser, setLoggedUser] = useState(null)
    const {loading, error, login} = useLogin()
    const [disableSubmitButton, setDisableSubmitButton] = useState(false)
    const {updateUser} = useContext(UserContext);
    const [formData, setFormData] = useState({
        password: '',
        mailAddress: '',
    });

    useEffect(() => {
        if (loggedUser) {
            updateUser(loggedUser);
        }
    }, [loggedUser]);

    useEffect(() => {
        setDisableSubmitButton(Object.values(formData).some(x => x === ''));
    }, [formData]);

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await login(formData)
        setLoggedUser(response)
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