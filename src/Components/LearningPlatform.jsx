import React from 'react'
import "../css/LearningPlatform.css"
import learningPlatformImg from "../Images/learningPlatform.png"
export default function LearningPlatform() {
  return (
    <div className='learning-platform-section'>
        <div className="learning-platform-box">
            <div className="learning-platform-box-left">
                <h2>The Most <span>Affordable</span>
                <br />
                    Learning Platform
                </h2>
                <p>Preparing for any exam has become a issue for most of the students as it is not affordable. 
                <br/>Defence Vidya is the only platform which provides you with test series, effective preparation, study materials and much more under one roof and at a price you all can affor. Join our batches for NDA, CDS, AFCAT now.</p>
                <div className="learning-platform-box-left-buttons">
                    <a href="nda-course" className="btn-a-outline">Enroll Now</a>
                    <a href="course" className="btn-a-solid">Watch Video</a>
                </div>
            </div>
            <div className="learning-platform-box-right">
                <img src={learningPlatformImg} alt="" />
            </div>
        </div>
    </div>
  )
}
