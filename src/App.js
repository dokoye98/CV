import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from "./components/Homepage.js"
import NavBar from "./components/NavBar.js"
import MasterProject from "./components/MasterProject.js"
import Experiences from "./components/Experiences.js"
import Education from "./components/Education.js"
import Projects from "./components/Projects.js"
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
   <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/experiences" element={<Experiences/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/msc_project" element={<MasterProject/>}/>
      </Routes>
    <Analytics/>
    </div>
   </Router>
  )
}

export default App
