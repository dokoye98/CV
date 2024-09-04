import React from "react"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Homepage from "./components/Homepage.js"
import NavBar from "./components/NavBar.js"
import MasterProject from "./components/MasterProject.js"
import Experiences from "./components/Experiences.js"
import Education from "./components/Education.js"
function App() {
  return (
   <Router>
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/experiences" element={<Experiences/>}/>
        <Route path="/education" element={<Education/>}/>
        <Route path="/msc_project" element={<MasterProject/>}/>
      </Routes>
    </div>
   </Router>
  )
}

export default App
