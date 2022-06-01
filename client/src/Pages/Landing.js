import React from "react";
import { Box } from "@mui/material";
import Styled from "styled-components";
import Logo from "../Images/LogoAmrest.png";

const Imagen = Styled.img``;

const Landing = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Imagen className="logo" src={Logo} />
    </Box>
  );
};

export default Landing;
