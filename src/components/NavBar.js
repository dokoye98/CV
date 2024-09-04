import React from "react"
import {Link} from 'react-router-dom'
import '../stylesheets/navbar.css'
function NavBar(){

    return(
        <nav>
            <ul>
                <li><Link to="/" id="homepage">Home</Link></li>
                <li><Link to="/msc_project" id="msc_compiler">MSc Project</Link></li>
            </ul>
        </nav>
    )
}
export default NavBar