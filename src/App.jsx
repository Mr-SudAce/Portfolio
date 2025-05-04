/* eslint-disable no-unused-vars */
import * as index from "./index.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className='h-screen'>
          <Routes>
            <Route path="/" element={<index.StartPoint />} />
            <Route path="home/" element={<index.Home />} />
            <Route path="projects/" element={<index.Project />} />
            <Route path="projects/:id" element={<index.ProjectDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
