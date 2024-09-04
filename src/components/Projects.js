import React from "react"
import '../stylesheets/experiences.css'


function Project(){

    return(
        <div className="experience-container">
            <div className="experience-list">

            <div className="experience-item">
          <h2>Big Data</h2>
          <h3>Parallel vs. Serial Programming</h3>
  <a
    href="https://github.com/dokoye98/Big-Data-CW1"
    className="date"
    target="_blank"
    rel="noopener noreferrer"
  >
    <p>GitHub Repository: Big Data CW1</p>
  </a>
  <ul>
    <li>
      Compared the efficiency of serial and parallel processing for tasks such as downloading, transcribing, and translating a collection of YouTube videos.
    </li>
  </ul>

  
  <h3>MiniNet Database Configuration</h3>
  <a
    href="https://github.com/dokoye98/Mini-Net"
    className="date"
    target="_blank"
    rel="noopener noreferrer"
  >
    <p>GitHub Repository: Mini-Net</p>
  </a>
  <ul>
    <li>
      Developed a database configuration for MiniNet, a streaming service similar to Netflix, managing user data, subscription plans, TV shows, videos, user reviews, favorites, and actor details.
    </li>
  </ul>
</div>
        </div>
       
            </div>

       
    )
}
export default Project