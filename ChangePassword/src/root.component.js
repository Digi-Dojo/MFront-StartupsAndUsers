import {useEffect, useState} from "react";
import {useCreate} from "./hooks/useCreate";
import {ChangePasswordForm} from "./components/ChangePasswordForm";


export default function ChangePassword() {
    const [updatedUser, setUpdatedUser] = useState(null)
    const {loading, error, createNew} = useCreate()
    const [disableSubmitButton, setDisableSubmitButton] = useState(false)
    const [formData, setFormData] = useState({
        mailAddress: '',
        oldPassword: '',
        newPassword: ''
    });

    useEffect(() => {
        setDisableSubmitButton(Object.values(formData).some(x => x === ''));
    }, [formData]);

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await createNew(formData, "users/updatePassword")
        setUpdatedUser(response)
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    return <ChangePasswordForm disableSubmitButton={disableSubmitButton} error={error} loading={loading} updatedUser={updatedUser}
                      formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
};