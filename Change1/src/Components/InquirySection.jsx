import React from 'react'
import "../css/InquirySection.css"
export default function InquirySection() {
  return (
    <div className='inquiry-section'>
        <h3>Have Any Doubt ?</h3>
        <p>Got any doubt in your mind ? Feel free to get in touch with us and we will clear your query.</p>
        <div className="flex-row">
            <a href="tel:7452967095" className="btn-a-outline">Enquiry With Call</a>
            <a href="mailto:defencevidya07@gmail.com" className="btn-a-solid">Enquiry With Mail</a>
        </div>
    </div>
  )
}
