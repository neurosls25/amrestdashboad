import React from "react";
import { Box, Container } from "@mui/material";
import ComputerCard from "../Components/ComputerCard";
import SideBar from "../Components/SideBar";

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Container>
        <SideBar />
      </Container>
      <Container>
        <Container>
          <h2>Lista de ordenadores</h2>
        </Container>
        <Container
          sx={{
            display: "flex",
          }}
        >
          
        </Container>
      </Container>
    </Box>
  );
};

export default Dashboard;
