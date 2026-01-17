import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import Changes from "./pages/Changes.jsx";
import Incidents from "./pages/Incidents.jsx";
import Problems from "./pages/Problems.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/changes" element={<Changes />} />
      <Route path="/incidents" element={<Incidents />} />
      <Route path="/problems" element={<Problems />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}
