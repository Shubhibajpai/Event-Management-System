import React from 'react'
import '../css/box.css';
import { useNavigate } from 'react-router-dom';
export default function Box({ src, altText, page }) {
    const navigate = useNavigate();
    const handleImageClick = (page) => {
       
        navigate(page); // Navigate to the page passed in the props
      };
  return (
    <div>
        <div className="box">
            <div className="img" onClick={() => handleImageClick(page)}>
                <img src={src} alt={altText}/>
            </div>
            <p>{altText}</p>
        </div>
    </div>
  )
}
