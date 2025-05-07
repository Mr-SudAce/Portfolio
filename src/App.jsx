/* eslint-disable no-unused-vars */
import * as index from "./index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="h-screen bg-black">
          <Routes>
            <Route path="/" element={<index.StartPoint />} />
            <Route path="home/" element={<index.Home />} />
            <Route path="projects/" element={<index.Project />} />
            <Route path="projects/:id" element={<index.ProjectDetails />} />
            <Route path="aboutme/" element={<index.AboutMe />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
