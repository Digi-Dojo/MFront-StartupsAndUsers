import {useContext, useEffect, useState} from "react";
import {useCreate} from "./hooks/useCreate";
import {UserContext} from "./components/UserContext";
import {LoginForm} from "./components/LoginForm";


export default function Login() {
    const [loggedUser, setLoggedUser] = useState(null)
    const {loading, error, createNew} = useCreate()
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
        const response = await createNew(formData, "users/login")
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