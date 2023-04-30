import {useState, useEffect} from "react";
import {useCreateStartUp} from "../hooks/useCreateStartUp";
import {CreateStartUpForm} from "../components/CreateStartUpForm";

export const CreateStartUp = () => {

    const [disableSubmitButton, setDisableSubmitButton] = useState(true)
    const [createdStartUp, setCreatedStartUp] = useState(null)
    const {loading, error, registerStartUp} = useCreateStartUp();
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await registerStartUp(formData)
        setCreatedStartUp(response)
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    useEffect(() => {
        setDisableSubmitButton(Object.values(formData).some(x => x === ''));
    }, [formData]);

    return <CreateStartUpForm disableSubmitButton={disableSubmitButton} error={error} loading={loading} registeredStartUp={createdStartUp}
                      formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
};