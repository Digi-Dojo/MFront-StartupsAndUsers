import {Grid} from "@mui/material";
import {Container} from "@mui/system";
import {Title} from "../components/Title";
import {RegisterUser} from "../fragments/RegisterUser";
import {Login} from "../fragments/Login";
import {ChangePassword} from "../fragments/ChangePassword";
import {AddTeamMember} from "../fragments/AddTeamMember";
import {CreateStartUp} from "../fragments/CreateStartUp";
import {UserContextProvider} from "../components/UserContextProvider";
import {Logout} from "../fragments/Logout";
import {ListUsersFromStartup} from "../fragments/ListUsersFromStartup"
import {User} from "../fragments/User";

export const Home = () => {

    return <main>
        <UserContextProvider>
            <Container maxWidth="lg">
                <Grid container columnSpacing={2}>
                    <Grid item md={12}>
                        <Title primary>Startups and Users Landing Page</Title>
                    </Grid>
                    <Grid item md={9}>
                        <Logout/>
                        <User />
                        <RegisterUser/>
                        <Login/>
                        <ChangePassword/>
                        <CreateStartUp/>
                        <AddTeamMember/>
                        <ListUsersFromStartup/>
                    </Grid>
                </Grid>
            </Container>
        </UserContextProvider>
    </main>
};