import {useAllStartups} from "../hooks/useAllStartups";
import {useContext, useEffect, useState} from "react";
import {useCreate} from "../hooks/useCreate";
import {UserContext} from "../components/UserContext";
import {AddTeamMemberForm} from "../components/AddTeamMemberForm";

export const AddTeamMember = () => {
    const startups = useAllStartups()
    const [selectedStartup, setSelectedStartup] = useState("");
    const [disableSubmitButton, setDisableSubmitButton] = useState(true)
    const {loading, error, createNew} = useCreate()
    const {loggedUser} = useContext(UserContext);
    const [newTeamMember, setNewTeamMember] = useState(null);
    const [formData, setFormData] = useState({
        userId: loggedUser != null ? loggedUser.id : '',
        role: '',
        startupId: ''
    });

    useEffect(() => {
        console.log(startups);
    }, [startups]);


    useEffect(() => {
        const newVal = loggedUser != null ? loggedUser.id : '';
        setFormData({
            ...formData,
            userId: newVal,
        });
    }, [loggedUser]);


    useEffect(() => {
        setDisableSubmitButton(Object.values(formData).some(x => x === ''));
    }, [formData]);

    const handleSubmit = async (e) => {
        //todo: add form validation before calling the hook
        e.preventDefault();
        const response = await createNew(formData, "teammembers/create")
        setNewTeamMember(response)
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSelectChange = (e) => {
        setSelectedStartup(e.target.value);
        setFormData({
            ...formData,
            startupId: e.target.value.id,
        })
    };

    return <AddTeamMemberForm disableSubmitButton={disableSubmitButton} error={error} loading={loading}
                              loggedUser={loggedUser} handleSelectChange={handleSelectChange}
                              selectedStartup={selectedStartup} newTeamMember={newTeamMember} startups={startups}
                              formData={formData} handleChange={handleChange} handleSubmit={handleSubmit}/>
}