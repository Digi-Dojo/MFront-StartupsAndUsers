import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Title } from "../components/Title";
import {RegisterUserForm} from "../fragments/RegisterUserForm";
import {LoginForm} from "../fragments/LoginForm";
import {ChangePasswordForm} from "../fragments/ChangePasswordForm";
import {AddTeamMemberForm} from "../fragments/AddTeamMemberForm";
import {useState} from "react";
import {StartUpForm} from "../fragments/StartUpForm";

export const Home = () => {
  const [loggedUser, setLoggedUser] = useState(null);

  const updateUser = (user) => {
    setLoggedUser(user);
  }

  return <Container maxWidth="lg">
    <Grid container columnSpacing={2}>
      <Grid item md={12}>
        <Title primary>Startups and Users Landing Page</Title>
      </Grid>
      <Grid item md={9}>
        <RegisterUserForm updateUser={updateUser}/>
        <LoginForm updateUser={updateUser}/>
        <ChangePasswordForm />
        <StartUpForm />
        <AddTeamMemberForm user={loggedUser} />
      </Grid>
    </Grid>
  </Container>
};