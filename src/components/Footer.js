import React from "react"
import '../stylesheets/footer.css'

function Footer(){

    return(
        <footer className="footer">
        <div className="container">
          <p>© 2024 Dwayne Okoye-Kachikwu. All rights reserved.</p>
          <div className="footer-links">
            <p>Dwayneokoye98@gmail.com</p> 
            <a href="https://www.linkedin.com/in/dwayne-okoye-kachikwu-ab856220a" target="_blank" rel="noopener noreferrer">LinkedIn</a> | 
            <a href="https://github.com/dokoye98" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </footer>
    )
}
export default Footer