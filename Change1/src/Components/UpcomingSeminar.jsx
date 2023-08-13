import React from 'react'
import "../css/UpcomingSeminar.css"
import seminar1 from "../Images/bannerdefence vidya (1)/1.png"
import seminar2 from "../Images/bannerdefence vidya (1)/2.png"
import seminar3 from "../Images/bannerdefence vidya (1)/3.png"
import seminar4 from "../Images/bannerdefence vidya (1)/4.png"
import upcomingSeminarImg from "../Images/webinar (1).png"
export default function UpcomingSeminar() {
  return (
    <div className='upcoming-seminar-section'>
      <h6>Learn Extra</h6>
      <h2>Upcoming <span>Seminar</span></h2>
      <p>Join our “defence Vidya ” webinar, where experienced defence personnel will guide you on acing defence exams, becoming an officer, and serving the nation. Gain insights into exam strategies, physical fitness, and interview skills.</p>
      <div className="e-book-flex">
        <a href="#"><img src={upcomingSeminarImg} alt="" className='seminar-card-img' /></a>
        <a href="#"><img src={upcomingSeminarImg} alt="" className='seminar-card-img' /></a>
        <a href="#"><img src={upcomingSeminarImg} alt="" className='seminar-card-img' /></a>
        <a href="#"><img src={upcomingSeminarImg} alt="" className='seminar-card-img' /></a>
      </div>
      {/* <img src={upcomingSeminarImg} alt="" /> */}
    </div>
  )
}
