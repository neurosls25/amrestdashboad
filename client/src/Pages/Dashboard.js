import React from "react";
import { Box, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Img from "../Images/portatil.jpg"

const Dashboard = () => {
  return (
    <Box 
      sx={{
        display: "flex"
      }}
    >
      <Container>
        <Stack
          width="150px"
          height="100vh"
          justifyContent="center"
          spacing={0.5}
          backgroundColor="var(--background-color-1)"
        >
          <Button sx={{
            width: "100%",
          }} variant="contained">Laptops</Button>
          <Button sx={{
            width: "100%",
          }} variant="contained">Phones</Button>
          <Button sx={{
            width: "100%",
          }} variant="contained">Tablets</Button>
          <Button sx={{
            width: "100%",
          }} variant="contained">Servers</Button>
        </Stack>
      </Container>
      <Container>
        <Container>
          <Box sx={{
            width: "200px",

          }}>
            <h2>ES-4L58TR</h2>
            <img src={Img} alt="portatil imagen" />
            <p>Details</p>
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default Dashboard;
