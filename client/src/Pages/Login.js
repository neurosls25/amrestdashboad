import React from "react";
import { Box, Container, TextField, Button } from "@mui/material";
import Styled from "styled-components";
import Logo from "../Images/LogoAmrest.png";

const Imagen = Styled.img``;

const Login = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          width: "390px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Imagen className="logo" src={Logo} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
          }}
        >
          <TextField
            required
            id="filled-required"
            label="email"
            defaultValue="email"
            variant="filled"
          />
          <TextField
            id="filled-password-input"
            label="password"
            type="password"
            autoComplete="current-password"
            variant="filled"
          />
          <Button className="button" variant="contained">
            submit
          </Button>
        </Box>
        <p className="text">
          Dont have an account? Create one<a href="/register"> here</a>
        </p>
      </Container>
    </Box>
  );
};

export default Login;
