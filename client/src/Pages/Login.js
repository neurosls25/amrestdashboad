import React from "react";
import { Box, Container, TextField, Button } from "@mui/material";
import Styled from "styled-components";
import Logo from "../Images/LogoAmrest.png";


const Imagen = Styled.img`
width: 100%;
`;

const Login = () => {
  return (
    <Box>
      <Container>
        <Imagen src={Logo} />
        <p>Login</p>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
        }}>
          <TextField
            required
            id="filled-required"
            label="email"
            defaultValue="email"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <Button variant="contained">submit</Button>
        </Box>
        <p>Dont have an account? Create one<a href="/"> here</a></p>
      </Container>
    </Box>
  );
};

export default Login;
