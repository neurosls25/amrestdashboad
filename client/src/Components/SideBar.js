import React from "react";
import { Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const SideBar = () => {
  return (
    <Container>
      <Stack
        width="150px"
        height="100vh"
        justifyContent="center"
        spacing={0.5}
        backgroundColor="var(--background-color-1)"
        textDecoration= "none"
      >
        <Button
          sx={{
            width: "100%",
          }}
          variant="contained"
        >
        <a href="/dashboard">Dashboard</a>
        </Button>
        <Button
          sx={{
            width: "100%",
          }}
          variant="contained"
        >
        <a href="/laptops">Laptops</a>
        </Button>
        <Button
          sx={{
            width: "100%",
          }}
          variant="contained"
        >
          <a href="/phones">phones</a>
        </Button>
        <Button
          sx={{
            width: "100%",
          }}
          variant="contained"
        >
          <a href="/tablets">Tablets</a>
        </Button>
        <Button
          sx={{
            width: "100%",
          }}
          variant="contained"
        >
          <a href="/servers">Servers</a>
        </Button>
      </Stack>
    </Container>
  );
};

export default SideBar;
