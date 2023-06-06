import {Alert} from "@mui/material";

const ErrorAlert = ({error}) => {
    if (error !== null) {
        return (<Alert variant="outlined" severity="error" style={{marginTop: '16px'}}> An error
            occured: {error}</Alert>);
    }
};

export default ErrorAlert;