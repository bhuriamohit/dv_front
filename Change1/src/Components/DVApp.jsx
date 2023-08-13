import React from 'react'
import "../css/DVApp.css"
import appStore from "../Images/appstore.png"
import playStore from "../Images/playstore.png"
import iphone from "../Images/DVIphone.png"
export default function DVApp() {
  return (
    <div className='dv-app-section'>
      <div className="dv-app-section-left">
        <h2>Get The <span>Defence Vidya</span> App</h2>
        <h4>#1 Mentorship Platform for Defence Exams</h4>
        <div className="dv-app-flex">
            <div className="btn-a-solid">Smooth Video interface for improved learning</div>
            <div className="btn-a-solid">Experienced Metors For Successfull Jurney</div>
        </div>
        <div className='app-feature-download-app'>
            <img src={playStore} />
            <img src={appStore} />
        </div>
      </div>
      <div className="dv-app-section-right">
        <img src={iphone} alt="" />
      </div>
    </div>
  )
}
