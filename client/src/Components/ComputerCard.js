import React from "react";
import { Box, Container } from "@mui/material";
import Img from "../Images/portatil.jpg";

const ComputerCard = () => {
  return (
    <div>
      <Container sx={{}}>
        <Box
          sx={{
            width: "300px",
            display: "flex",
            flexDirection: "column",
            border: "1px solid lightgray",
            borderRadius: "5px 5px 5px",
            textAlign: "center",
          }}
        >
          <h3>ES-4L58TR</h3>
          <p>Diego Gallo (diego.gallo@amrest.eu)</p>
          <img src={Img} alt="portatil imagen" style={{ padding: "1rem" }} />
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              fontSize: "var(--fontSize)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                width: "100%",
                paddingLeft: "0.5rem",
              }}
            >
              <p>Marca:</p>
              <p>Modelo:</p>
              <p>Procesador:</p>
              <p>Memoria:</p>
              <p>SSD:</p>
              <p>HDD:</p>
              <p>OS:</p>
              <p>Politicas:</p>
            </Box>
            <Box
              sx={{
                width: "100%",
                paddingLeft: "1rem",
              }}
            >
              <p>Dell</p>
              <p>Latitud 5420</p>
              <p>I5 4500k</p>
              <p>16Gb</p>
              <p>256Gb</p>
              <p>No</p>
              <p>Windows 10</p>
              <p>Passed</p>
            </Box>
            <Box
              sx={{
                width: "100%",
                paddingLeft: "1rem",
              }}
            >
              <p>Dell</p>
              <p>Latitud 5420</p>
              <p>I5 4500k</p>
              <p>16Gb</p>
              <p>256Gb</p>
              <p>No</p>
              <p>Windows 10</p>
              <p>Passed</p>
            </Box>
          </Box>
        </Box>
      </Container>
    </div>
  );
};

export default ComputerCard;
