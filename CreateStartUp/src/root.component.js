import {useState, useEffect} from "react";
import {useCreate} from "./hooks/useCreate";
import {CreateStartUpForm} from "./components/CreateStartUpForm";

export default function CreateStartUp() {

    const [createdStartUp, setCreatedStartUp] = useState(null)
    const {loading, error, createNew} = useCreate();
    const [disableSubmitButton, setDisableSubmitButton] = useState(true)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await createNew(formData, "startup/create")
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