import React from 'react'
import "../css/NdaCourseDetailSection.css";
import courseVideo from "../Videos/nda course vidya.mp4"
import StarIcon from '@mui/icons-material/Star';


export default function NdaCourseDetailSection() {
  return (
    <div className='specific-course-detail'>
      <h6>NDA Course Details</h6>
      <div className="specific-course-flex">
        <div className="specific-course-flex-right">
            <h3>What is Inside This <span>Course</span></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio adipisci nam quasi quaerat inventore totam?</p>
            <div className="subject-detail-box">
                <details className='subject-detail-drop-down'>
                    <summary>English</summary>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                    </ul>
                </details>
                <details className='subject-detail-drop-down'>
                    <summary>Maths</summary>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                    </ul>
                </details>
                <details className='subject-detail-drop-down'>
                    <summary>GS</summary>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                    </ul>
                </details>
                <details className='subject-detail-drop-down'>
                    <summary>Science</summary>
                    <ul>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                        <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio</li>
                    </ul>
                </details>
            </div>
        </div>
        <div className="specific-course-flex-left">
            <video src={courseVideo} controls="true"></video>
            <h4>NDA Online Coaching</h4>
            <p>let's crack it</p>
            <div className="flex-row">
                <StarIcon className='flex-row-star-icon'/>
                <p>200+ Lecture Included</p>
            </div>
            <div className="flex-row">
                <StarIcon  className='flex-row-star-icon'/>
                <p>200+ Lecture Included</p>
            </div>
            <div className="flex-row">
                <StarIcon  className='flex-row-star-icon'/>
                <p>200+ Lecture Included</p>
            </div>
            <div className="flex-row">
                <StarIcon  className='flex-row-star-icon'/>
                <p>200+ Lecture Included</p>
            </div>
            <button className='btn-a-outline'>Join For Free</button>
            <button className='btn-a-solid'>Enroll Now</button>
        </div>
      </div>
    </div>
  )
}
