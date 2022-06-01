import React from "react";
import { Box, Container } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Dashboard = () => {
  return (
    <Box>
      <Container>
        <Stack
          height="100vh"
          direction="column-reverse"
          justifyContent="center"
          alignItems="flex-start"
          spacing={0.5}
        >
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
          <Button variant="contained">Contained</Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Dashboard;
