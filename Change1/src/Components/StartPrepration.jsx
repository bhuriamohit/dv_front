import React from 'react'
import "../css/StartPrepration.css"
import { Link } from 'react-router-dom'
import coverPhoto from "../Images/Cover-Photo.png"

export default function StartPrepration() {
  return (
    <div className='start-prepration-section'>
      <div className="start-prepration-section-left">
        <h3>Start Your <span>Defence</span> Exam Prepration with <span>Defence Vidya</span></h3>
        <p>India’s Most experienced for Online Defence Exam prep.</p>
        <p>Purely focused on Defence Exams.</p>
        <p>Prepare for <span> NDA Exam, CDS Exam, AFCAT </span>defence competitive exams</p>
        <div className="start-prepration-section-left-buttons">
          <Link to="/" className='btn-a-solid'>Enroll Now</Link>
          <Link to="/" className='btn-a-outline'>Free Session</Link>
        </div>
      </div>
      <div className="start-prepration-section-right">
        <img src={coverPhoto} alt="" />
      </div>
    </div>
  )
}
