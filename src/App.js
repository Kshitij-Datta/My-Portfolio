import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import ProjectsPage from "./Components/ProjectsPage";

import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>

      <Analytics />
    </>
  );
}

export default App;
