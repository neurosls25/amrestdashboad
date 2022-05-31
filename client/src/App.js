import "./App.css";
import { Box } from "@mui/material";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";


function App() {
  return (
    <Box>
      <Router>
        <Route exact path="/login" element={Login} />
        <Route exact path="/register" element={Register} />
      </Router>
    </Box>
  );
}

export default App;
