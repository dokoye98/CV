import React,{useState} from "react"
import MScPic from '../images/MScCompiler1.png'
import '../stylesheets/mscProject.css'


function MasterProject(){
    const [isTextVisible, setTextVisible] = useState(false)

    const handleImageClick = ()=>{
        setTextVisible(!isTextVisible)
    }
    return(
        <div className="master-project-container">
            <h1>MSc dissertation</h1>
            <div className="Susana">
                <p>Click the image for description</p>
            <a href="https://github.com/dokoye98/Final_Compiler"
              target="_blank" 
              rel="noopener noreferrer">
            <h3>A Comprehensive Guide to Compiler Development: A Hybrid Python-Java Approach with Cloud Accessibility</h3>
            </a>
            </div>

        <div className="compiler"onClick={handleImageClick}>
            <img src={MScPic} alt="Compiler web app screenshot" className="MSc"/>
        </div>
        
            {isTextVisible && (
                <div className="project-summary">
            <p>The extact is the sample of the tokens generated for a = [1,2,3,5,61212,43,1]; int b = a[1]; int c = a[2];int e = b +c; print c</p>
            <p>The report aims to develop a toy compiler using Python and Java, emphasizing education and accessibility for beginner programmers.</p>
                
                </div>
        )}
        
        </div>
    )
}
export default MasterProject