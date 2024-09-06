import React, { useState } from "react"
import image1 from '../compilerImages/image1.png'
import image2 from '../compilerImages/image2.png'
import image3 from '../compilerImages/image3.png'
import image4 from '../compilerImages/image4.png'
import image5 from '../compilerImages/image5.png'
import '../stylesheets/mscProject.css'
const images = [image5,image1,image4,image3,image2]
function Floors() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleImageClick = (image) => {
    setCurrentIndex(image)
    setIsOpen(true)
  };

  const handleClose = () => {
    setIsOpen(false)

  }
  const showPrevImage = (e) =>{
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }
  const showNextImage = (e)=>{
    e.stopPropagation()
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (

    
      


    <div className="master-project-container">
        <h1>MSc dissertation</h1>
            <div className="Susana">
            <a href="https://github.com/dokoye98/Final_Compiler"
              target="_blank" 
              rel="noopener noreferrer">
            <h3>A Comprehensive Guide to Compiler Development: A Hybrid Python-Java Approach with Cloud Accessibility</h3>
            </a>
        </div>
         <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`pic ${index + 1}`} onClick={() => handleImageClick(index)} />
        ))}
      </div>
       <div className="image-grid">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`pic ${index + 1}`} onClick={() => handleImageClick(index)} />
        ))}
      </div>

      
      {isOpen && (
        <div className="lightbox" onClick={handleClose}>
          <img src={images[currentIndex]} alt="Full Screen" className="lightbox-image" />
          <span className="lightbox-close" onClick={handleClose}>&times;</span>
          <span className="lightbox-arrow left" onClick={showPrevImage}>&#10094;</span>
          <span className="lightbox-arrow right" onClick={showNextImage}>&#10095;</span>
        </div>
      )}
    </div>
  )
}

export default Floors
