import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen } from "./screens/homeScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
