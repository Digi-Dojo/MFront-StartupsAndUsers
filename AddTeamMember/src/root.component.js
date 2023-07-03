
import {useEffect, useState} from "react";
import {useAllStartups} from "./hooks/useAllStartups";
import {useCreate} from "./hooks/useCreate";
import {AddTeamMemberForm} from "./components/AddTeamMemberForm";
import {useUserFromCookie} from "./hooks/useUserFromCookie";


export const AddTeamMember = () => {
    const {getStartups} = useAllStartups();
    const [startups, setStartups] = useState();
    const [selectedStartup, setSelectedStartup] = useState("");
    const [disableSubmitButton, setDisableSubmitButton] = useState(true)
    const {loading, error, createNew} = useCreate()
    const loggedUser = useUserFromCookie();
    const [newTeamMember, setNewTeamMember] = useState(null);
    const [formData, setFormData] = useState({
        userId: loggedUser != null ? loggedUser.id : '',
        role: '',
        startupId: ''
    });


    const loadStartups = async () => {
        const response = await getStartups();
        setStartups(response);
    }

    useEffect(() => {
        loadStartups();
    }, []);


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