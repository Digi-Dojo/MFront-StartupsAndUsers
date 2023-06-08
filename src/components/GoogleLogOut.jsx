import {GoogleLogout} from 'react-google-login'

const clientId = "544595415685-pd4ena5un6g1k94ikd3plbeueapnfo37.apps.googleusercontent.com"


function Logout(){

    const onSuccess = (res) => {
        console.log("Log out successfull!");
    }

    return(
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;