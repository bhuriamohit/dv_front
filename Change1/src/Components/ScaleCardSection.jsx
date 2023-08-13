import React from 'react'
import "../css/ScaleCardSection.css"
import scaleCardImg from "../Images/Cover-Photo.png"
export default function ScaleCardSection() {
  return (
    <div className='scale-card-section'>
      <div className="scale-card">
        <div className="scale-card-left">
            <h4>Welcome To Defence Vidya</h4>
            <p>Your stepping stone to success in NDA, CDS, AFCAT. Start your victory journey today!</p>
            <a href="#FreeFormSection" className="btn-a-solid">Click Here</a>
        </div>
        <div className="scale-card-right">
            <img src={scaleCardImg} alt="" />
        </div>
      </div>
    </div>
  )
}
