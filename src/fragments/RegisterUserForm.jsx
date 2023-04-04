import {TextField, Button} from "@mui/material";
import {useState} from "react";


export const RegisterUserForm = () => {
    const [mailValue, setMailValue] = useState("")

    const onMailChange = (e) => setMailValue(e.target.value)
    const handleSubmit = () => console.log(mailValue)
    return <main>

        <form onSubmit={handleSubmit}>

            <TextField id="outlined-basic" label="Mail Address" variant="outlined" onChange={onMailChange}
                       value={mailValue}/>
            <TextField id="outlined-basic" label="Password" variant="outlined"/>

            <Button variant={"contained"} type={"submit"}>Submit</Button>

        </form>
    </main>
};