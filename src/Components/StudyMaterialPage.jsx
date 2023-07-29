import React, { useContext, useEffect, useState } from 'react'
import "../css/StudyMaterialPage.css";
import StudyMaterialCard from './StudyMaterialCard';
import Acheivements from './Acheivements';
import CourseSection from './CourseSection';
import { AuthContext } from './AuthContext';
import { Helmet } from 'react-helmet';
import InquirySection from './InquirySection';

export default function StudyMaterialPage() {
    const { token } = useContext(AuthContext);

    const [studydata, setstudydata] = useState([])
    async function studyList() {

        let res = await fetch('https://smiling-blue-hosiery.cyclic.app/api/user/getMaterial').then((r) => r.json()).then((res) => (setstudydata(res.studymaterials)))
    }

    useEffect(() => {
        studyList()
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
      }, []);
    return (
        <>
        <Helmet>
            <meta charset="UTF-8"/>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"/>
            <meta name="robots" content="index, follow"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>Study Material</title>
            <meta
              name="description"
              content="Your Organization provides online education for NDA and CDS exams. Prepare for the exams with our comprehensive courses and expert instructors."
            />
          </Helmet>
            <div className="study-material-page-header">
                <p>Get The Best Education From</p>
                <h1>Defence <span>Vidya</span></h1>
                <p>We have the experts to take you toward the journey of your success!</p>
            </div>
            <div className="study-material-section">
                <div className="study-material-section-top">
                    <h3><span>Study </span> Material</h3>
                    <p>Read from the notes of subject experts</p>
                </div>
                <div className="study-material-section-bottom">
                    {
                        studydata?.map((item) => {
                            return <StudyMaterialCard {...item} key={item._id} />
                        })
                    }

                </div>
            </div>
            <div className="study-material-army-bg"></div>
            <Acheivements />
            <InquirySection/>
            <CourseSection />
        </>
    )
}
