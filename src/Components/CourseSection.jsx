import React from 'react'
import "../css/CourseSection.css"
import NearMeIcon from '@mui/icons-material/NearMe';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
export default function CourseSection() {

    const getcoursepayment=async (price)=>
    {
        let data=
        {
            amount:price
        }

        let response = await fetch("https://backend-defence-vidya.onrender.com/payment", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });

          response =await response.json();
          response=response.link;
          console.log(response);
          window.open(response,"_blank");
    }


  return (
    <div className='course-section'>
        <div className="course-section-top">
            <h3>Our <span>Courses</span></h3>
        </div>
        <div className="course-section-middle">
            <div className="course-card">
                <h3>CDS</h3>
                <p className='exam-online'>Exam Online Coaching 2023</p>
                <h5>Advantages</h5>
                <div className="course-card-advantage-points">
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Study Material</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Live Classes</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Recorded Lectures</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Affordable Fee</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Experienced Faculty</p>
                    </div>
                </div>
                <h5>Rs. 5999</h5>
                <button onClick={()=>getcoursepayment(5999)} className="btn-a-solid">Enroll Now</button>
            </div>
            <div className="course-card">
                <h3>CDS</h3>
                <p className='exam-online'>OTA Exam Online Coaching 2023</p>
                <h5>Advantages</h5>
                <div className="course-card-advantage-points">
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Study Material</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Live Classes</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Recorded Lectures</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Affordable Fee</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Experienced Faculty</p>
                    </div>
                </div>
                <h5>Rs. 5499</h5>
                <button onClick={()=>getcoursepayment(5499)} className="btn-a-solid">Enroll Now</button>
            </div>
            <div className="course-card">
                <h3>NDA</h3>
                <p className='exam-online'>Exam Online Coaching 2023</p>
                <h5>Advantages</h5>
                <div className="course-card-advantage-points">
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Study Material</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Live Classes</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Recorded Lectures</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Affordable Fee</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Experienced Faculty</p>
                    </div>
                </div>
                <h5>Rs. 5999</h5>
                <button onClick={()=>getcoursepayment(5999)} className="btn-a-solid">Enroll Now</button>
            </div>
            <div className="course-card">
                <h3>AFCAT</h3>
                <p className='exam-online'>Exam Online Coaching 2023</p>
                <h5>Advantages</h5>
                <div className="course-card-advantage-points">
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Study Material</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Live Classes</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Recorded Lectures</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Affordable Fee</p>
                    </div>
                    <div className="advantage-point">
                        <NearMeIcon className='icon'/>
                        <p>Experienced Faculty</p>
                    </div>
                </div>
                <h5>Rs. 5999</h5>
                <button onClick={()=>getcoursepayment(5999)} className="btn-a-solid">Enroll Now</button>
            </div>
        </div>
    </div>
  )
}
