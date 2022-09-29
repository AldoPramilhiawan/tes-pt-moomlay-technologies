import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Starship from "./components/Starship";
import People from "./components/People";
import Planet from "./components/Planet";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Navbar />} />
          <Route path="/starship" element={<Starship />} />
          <Route path="/people" element={<People />} />
          <Route path="/planet" element={<Planet />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
