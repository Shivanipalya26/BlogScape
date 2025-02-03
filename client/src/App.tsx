import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import RootStructure from "./styles/template/RootStructure";
import Register from "./pages/register";
import Login from "./pages/login";

function App() {
  return (
    <Router>
      <RootStructure>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </RootStructure>
    </Router>
    
  );
}

export default App;
