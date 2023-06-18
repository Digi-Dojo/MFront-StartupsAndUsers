import {useCreate} from "./hooks/useCreate";
import {RegisterUserForm} from "./components/RegisterUserForm";
import Cookies from 'js-cookie';
import {useEffect, useState} from "react";


export default function RegisterUser() {

    const [registeredUser, setRegisteredUser] = useState(null)
    const {loading, error, createNew} = useCreate()
    const [disableSubmitButton, setDisableSubmitButton] = useState(false)

    const [formData, setFormData] = useState({
        name: '',
        password: '',
        mailAddress: '',
    });


    useEffect(() => {
        setDisableSubmitButton(Object.values(formData).some(x => x === ''));
    }, [formData]);

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await createNew(formData, "users/create")
        setRegisteredUser(response)
        Cookies.set('user', JSON.stringify(response), {expires: 7}); // Save loggedUser in a cookie

    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return <RegisterUserForm disableSubmitButton={disableSubmitButton} error={error} loading={loading} registeredUser={registeredUser}
                      formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
};