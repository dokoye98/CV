import React from "react"
import '../stylesheets/experiences.css'


function Project(){

    return(
        <div className="experience-container">
            <div className="experience-list">

            <div className="experience-item">



            <h2>Web Development</h2>
          <h3>Social media: Wave</h3>
  <a
    href="https://github.com/dokoye98/Wave-client"
    className="date"
    target="_blank"
    rel="noopener noreferrer"
  >
    <p>GitHub Repository: Wave social media frontend(React)</p>
  </a>
  <ul>
    <li>
      This website allows users to create accounts (GDPR protected) and interact with different users posts.
    </li>
  </ul>
  <h3>Social media: Wave</h3>
  <a
    href="https://github.com/dokoye98/Wave-server"
    className="date"
    target="_blank"
    rel="noopener noreferrer"
  >
    <p>GitHub Repository: Wave social media Backend(Node.js)</p>
  </a>
  <ul>
    <li>
      The backend connects to the database for post storage, user creation, and user interaction
    </li>
  </ul>
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

 

  <h2>Applied Machine learning</h2>
          <h3>GitHub Repository: Natural language processing</h3>
  <a
    href="https://github.com/dokoye98/Wave-client"
    className="date"
    target="_blank"
    rel="noopener noreferrer"
  >
    <p></p>
  </a>
  <ul>
  <li>
    Part 1: Performed syntax and style analysis on a collection of novels using various NLP libraries, including NLTK and spaCy.
  </li>
  <li>
    Part 2: Trained, optimized, and compared two machine learning models (Random Forest and SVM) to predict political party affiliation from speech text.
  </li>
</ul>
<h3>Data Science fundamentals</h3>
  <a
    href="https://github.com/dokoye98/Dataprojects"
    className="date"
    target="_blank"
    rel="noopener noreferrer"
  >
    <p>GitHub Repository: Data science jounrey main project(Prima diabetes model)</p>
  </a>
  <ul>
  <li>
  Final project: Developed a diabetes prediction model using the Pima Indians Diabetes dataset. 
  </li>
<li>
  Log of data science libraries: NumPy, Matplotlib, and Pandas. Used NumPy for efficient array manipulations and numerical operations, Pandas for data manipulation and analysis, and Matplotlib for data visualization.
</li>

  </ul>

</div>
        </div>
       
            </div>

       
    )
}
export default Project