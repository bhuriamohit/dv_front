import React from 'react'
import teacher1 from "../Images/teacher1.png"
import teacher2 from "../Images/teacher2.png"
import teacher3 from "../Images/teacher3.png"
import teacher4 from "../Images/teacher4.png"
import teacher5 from "../Images/teacher5.png"
import teacher6 from "../Images/teacher6.png"
export default function FacultySection() {
  return (
    <div className="fulfill-dream">
    <h3>Fulfill your <span>Dream Of Uniform</span> with us</h3>
    <p>We have a highly knowledgeable team of educators who can guide you throughout your journey to the respective academies. They are themselves aspirants who have analysed the subjects of their domains and are ready to provide you one on one guidance and supports.</p>
    <div className="fulfill-dream-grid">
      <div className="teacher-box" id="tbox1">
        <div className="teacher-image">
          <img src={teacher1} alt="" />
        </div>
        <div className="teacher-detail">
          <h5>Abhrant Singh</h5>
          <p>GS Expert</p>
        </div>
      </div>
      <div className="teacher-box" id="tbox2">
      <div className="teacher-image">
          <img src={teacher2} alt="" />
        </div>
        <div className="teacher-detail">
          <h5>Pawan Saini</h5>
          <p>GS Expert</p>
        </div>
      </div>
      <div className="teacher-box" id="tbox3">
      <div className="teacher-image">
          <img src={teacher3} alt="" />
        </div>
        <div className="teacher-detail">
          <h5>Aditya Panwar</h5>
          <p>Maths Expert</p>
        </div>
      </div>
      <div className="teacher-box" id="tbox4">
      <div className="teacher-image">
          <img src={teacher4} alt="" />
        </div>
        <div className="teacher-detail">
          <h5>Anurag Chauhan</h5>
          <p>Science Expert</p>
        </div>
      </div>
      <div className="teacher-box" id="tbox5">
      <div className="teacher-image">
          <img src={teacher5} alt="" />
        </div>
        <div className="teacher-detail">
          <h5>Aditya Singh</h5>
          <p>GS Expert</p>
        </div>
      </div>
      <div className="teacher-box" id="tbox6">
      <div className="teacher-image">
          <img src={teacher6} alt="" />
        </div>
        <div className="teacher-detail">
          <h5>Shivam Yadav</h5>
          <p>English Expert</p>
        </div>
      </div>
    </div>
  </div>
  )
}
