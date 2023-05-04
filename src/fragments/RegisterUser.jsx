import {useContext, useEffect, useState} from "react";
import {useCreate} from "../hooks/useCreate";
import {UserContext} from "../components/UserContext";
import {RegisterUserForm} from "../components/RegisterUserForm";


export const RegisterUser = () => {

    const [registeredUser, setRegisteredUser] = useState(null)
    const {loading, error, createNew} = useCreate()
    const [disableSubmitButton, setDisableSubmitButton] = useState(false)
    const {updateUser} = useContext(UserContext)
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        mailAddress: '',
    });

    useEffect(() => {
        if (registeredUser) {
            updateUser(registeredUser);
        }
    }, [registeredUser, updateUser]);


    useEffect(() => {
        setDisableSubmitButton(Object.values(formData).some(x => x === ''));
    }, [formData]);

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await createNew(formData, "users/create")
        setRegisteredUser(response)
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