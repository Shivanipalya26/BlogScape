import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import RootStructure from "./styles/template/RootStructure";
import Register from "./pages/register";
import Login from "./pages/login";
import AboutPage from "./pages/about";

function App() {
  return (
    <Router>
      <RootStructure>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </RootStructure>
    </Router>
    
  );
}

export default App;
