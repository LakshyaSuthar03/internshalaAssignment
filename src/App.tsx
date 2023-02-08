import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./assets/Login";
import { Home } from "./assets/Home";
import ProtectedRoutes from "../src/ProtectedRoutes";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<ProtectedRoutes Component={Home} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
