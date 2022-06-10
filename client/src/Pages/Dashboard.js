import React from "react";
import { Box, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import ComputerCard from "../Components/ComputerCard"

const Dashboard = () => {
  return (
    <Box
      sx={{
        display: "flex",
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
          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
          >
            Laptops
          </Button>
          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
          >
            Phones
          </Button>
          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
          >
            Tablets
          </Button>
          <Button
            sx={{
              width: "100%",
            }}
            variant="contained"
          >
            Servers
          </Button>
        </Stack>
      </Container>
      <Container sx={{
        display: "flex",
      }}>
        <ComputerCard />
        <ComputerCard />
        <ComputerCard />
      </Container>
      <Container>
        <h2>Lista de ordenadores</h2>
      </Container>
    </Box>
  );
};

export default Dashboard;
