import React from 'react'
import "../css/WritingExamSection.css"
import pen from "../Images/penImage.png"
export default function WritingExamSection() {
  return (
    <div className='writing-exam-section'>
      <h2>Free <span>LIVE CLASS REGISTRATION</span></h2>
      <h4>Get <span>FREE</span> Access Of</h4>
      <div className="exam-section-flex">
        <h1>Defence<br/>Vidya</h1>
        <img src={pen} alt="" />
      </div>
      <div className="exam-section-flex">
        <h5>Fill the Google Form Right Now</h5>
        <button className="btn-a-solid">Click Here</button>
      </div>
    </div>
  )
}
