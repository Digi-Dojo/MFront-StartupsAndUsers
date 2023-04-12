import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import { Title } from "../components/Title";
import {StartUpForm} from "../fragments/StartUpForm";
import {RegisterUserForm} from "../fragments/RegisterUserForm";
import {LoginForm} from "../fragments/LoginForm";
import {ChangePasswordForm} from "../fragments/ChangePasswordForm";
import {AddTeamMemberForm} from "../fragments/AddTeamMemberForm";



export const Home = () => {
  return <Container maxWidth="lg">
    <Grid container columnSpacing={2}>
      <Grid item md={12}>
        <Title primary>Startups and Users Landing Page</Title>
      </Grid>
      <Grid item md={9}>
        <RegisterUserForm />
        <LoginForm />
        <ChangePasswordForm />
        <AddTeamMemberForm />
      </Grid>

      <Grid item md={9}>
        <StartUpForm />
      </Grid>

    </Grid>
  </Container>
};