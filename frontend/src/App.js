import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Roulette from "./components/Game";
import "./app.css";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/roulette" element={<Roulette />} />
      </Routes>
    </Router>
  );
}

export default App;
