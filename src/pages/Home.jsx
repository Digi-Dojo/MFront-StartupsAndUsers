import {Grid} from "@mui/material";
import {Container} from "@mui/system";
import {Title} from "../components/Title";
import {RegisterUserForm} from "../fragments/RegisterUserForm";
import {LoginForm} from "../fragments/LoginForm";
import {ChangePasswordForm} from "../fragments/ChangePasswordForm";
import {AddTeamMemberForm} from "../fragments/AddTeamMemberForm";
import {StartUpForm} from "../fragments/StartUpForm";
import {UserContextProvider} from "../components/UserContextProvider";
import {Logout} from "../components/Logout";

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
                        <RegisterUserForm/>
                        <LoginForm/>
                        <ChangePasswordForm/>
                        <StartUpForm/>
                        <AddTeamMemberForm/>
                    </Grid>
                </Grid>
            </Container>
        </UserContextProvider>
    </main>
};