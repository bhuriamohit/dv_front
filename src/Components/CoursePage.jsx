import React, { useContext, useEffect, useState } from 'react'
import "../css/CoursePage.css"
import "../Responsive/CoursePage.css"
import LearningPlatform from "./LearningPlatform"
import LectureCard from "./LectureCard"
import Acheivements from "./Acheivements"
import CourseSection from './CourseSection'
import { AuthContext } from './AuthContext'
import { Helmet } from 'react-helmet'
import InquirySection from './InquirySection'
export default function CoursePage() {
  const { token } = useContext(AuthContext);
  const [videodata, setvideodata] = useState([]);
  async function videoList() {
    let res = await fetch('https://smiling-blue-hosiery.cyclic.app/api/user/getcourse').then((r) => r.json()).then((res) => (setvideodata(res.coursedetails)))
  }
  useEffect(() => {
    videoList()
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page
  }, []);

  return (
    <div className='course-page'>
          <Helmet>
            <meta charset="UTF-8"/>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
            <meta name="robots" content="index, follow"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title> Lectures</title>
            <meta
              name="description"
              content="Your Organization provides online education for NDA and CDS exams. Prepare for the exams with our comprehensive courses and expert instructors."
            />
          </Helmet>
      <LearningPlatform />
      <div className="video-section">
        <div className="video-section-top">
          <h3>Watch <span> Lectures</span></h3>
        </div>
        <div className="video-section-bottom">
          {
            videodata?.map((item) => {
              return <LectureCard {...item} key={item._id} />
            })
          }

        </div>
      </div>
      <div className="course-bg"></div>
      <CourseSection />
      <InquirySection/>
      <Acheivements />
    </div>
  )
}
