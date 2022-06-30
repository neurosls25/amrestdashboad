import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Landing from "./Pages/Landing";
import Dashboard from "./Pages/Dashboard";

function App() {
  return (
    <Box>
      <Router>
        <Routes>
        <Route exact path="/" element={<Landing />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/laptops" element={<Dashboard />} />
          <Route exact path="/phones" element={<Dashboard />} />
          <Route exact path="/tablets" element={<Dashboard />} />
          <Route exact path="/servers" element={<Dashboard />} />
        </Routes>
      </Router>
    </Box>
  );
}

export default App;
