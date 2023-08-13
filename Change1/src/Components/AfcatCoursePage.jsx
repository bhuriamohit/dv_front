import React from "react";
import "../css/NdaCoursePage.css";
import gif from "../gif/NDA (1).gif";
import gif2 from "../gif/NDA (2).gif";
import gif3 from "../gif/NDA (3).gif";
import gif4 from "../gif/NDA (4).gif";
import gif5 from "../gif/NDA (5).gif";
import gif6 from "../gif/NDA (6).gif";
import gif7 from "../gif/NDA (7).gif";
import gif8 from "../gif/NDA (8).gif";
import gif9 from "../gif/NDA (9).gif";
import gimg from "../Images/exam_prep (1).png"
import DVAPP from "./DVApp"

import correct from "../gif/correct.gif"
import teacher1 from "../Images/teacher1.png"
import teacher2 from "../Images/teacher2.png"
import teacher3 from "../Images/teacher3.png"
import teacher4 from "../Images/teacher4.png"
import teacher5 from "../Images/teacher5.png"
import teacher6 from "../Images/teacher6.png"
// import gimg from "../Images/gimg.jpeg"
import gimg2 from "../Images/gimg2.jpeg"
import testimonial from "../Images/boy1.jpg"
import contactImg from "../Images/councellingImg.png"
import TestimonialSection from "./TestimonialSection"
import InquirySection from "./InquirySection";
import AppFeatures from "./AppFeatures"

import FreeFormSection from "./FreeFormSection";
export default function AfcatCoursePage() {
  return (
    <div className="nda-course-page">
      <div className="nda-course-page-head">
        <div className="nda-course-page-head-left">
          <h2>
            <span>AFCAT</span> Coaching Online
          </h2>
          <p>
            Join Defence Vidya online coaching for defence exams and take
            advantage of the best resources. Join the most comprehensive online
            nda coaching classes, lectures. Defence vidya offers best online
            coaching for all the defence exams in India at very affordable
            prices. We offers best quality online course, Study materials, Test
            series for all aspirants with just one click.
          </p>
          <button className="btn-a-solid">Discover More</button>
          <div className="square-card-section">
            <div className="square-card">
                <h4>Expert Faculty</h4>
            </div>
            <div className="square-card">
                <h4>Daily DPPs</h4>
            </div>
            <div className="square-card">
                <h4>300+ Lectures</h4>
            </div>
          </div>
        </div>
        <div className="nda-course-page-head-right">
          <img src={gimg} alt="" className="gif" />
        </div>
      </div>
      <div className="our-batches">
        <h3>
          Our <span>Batches</span>
        </h3>
        <div className="our-batches-bottom">
          <div className="batch-card">
            <h4>NDA Foundation</h4>
            <img src={gif4} alt="" className="sm-gif" />
            <p>500 Live Lectures</p>
            <p>300 DPPs & Solutions</p>
            <p>4 mock test</p>
            <p>Topic wise mock test</p>
            <p style={{ fontWeight: "bold" }}>1 Year Validity</p>
            <button className="btn-a-solid">Enroll Now</button>
          </div>
          <div className="batch-card">
            <h4>Shershaah 1.0</h4>
            <img src={gif5} alt="" className="sm-gif" />
            <p>300 Live Lectures</p>
            <p>300 DPPs & Solutions</p>
            <p>4 mock test</p>
            <p>Topic wise mock test</p>
            <p style={{ fontWeight: "bold" }}>6 months Validity</p>
            <button className="btn-a-solid">Enroll Now</button>
          </div>
          <div className="batch-card">
            <h4>Sankapl 1</h4>
            <img src={gif4} alt="" className="sm-gif" />
            <p>250 Live Lectures</p>
            <p>300 DPPs & Solutions</p>
            <p>4 mock test</p>
            <p>Topic wise mock test</p>
            <p style={{ fontWeight: "bold" }}>4 months Validity</p>
            <button className="btn-a-solid">Enroll Now</button>
          </div>
        </div>
      </div>
      
      <AppFeatures/>

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


      <div className="batch-advantage">
        <div className="batch-advantage-left">
          <img src={gimg2} alt="" className="gif" />
        </div>
        <div className="batch-advantage-right">
          <h3>NDA Online Course Features</h3>
          <div className="advantage-grid">
            <div className="batch-advantage-feature">
              <img src={correct} alt="" className="xsm-gif" />
              <p>Live and recorded sessions</p>
            </div>
            <div className="batch-advantage-feature">
              <img src={correct} alt="" className="xsm-gif" />
              <p>Continuous individual assessment (DPP)</p>
            </div>
            <div className="batch-advantage-feature">
              <img src={correct} alt="" className="xsm-gif" />
              <p>Study Material</p>
            </div>
            <div className="batch-advantage-feature">
              <img src={correct} alt="" className="xsm-gif" />
              <p>Save time, efforts and money</p>
            </div>
            <div className="batch-advantage-feature">
              <img src={correct} alt="" className="xsm-gif" />
              <p>renowned faculty</p>
            </div>
            <div className="batch-advantage-feature">
              <img src={correct} alt="" className="xsm-gif" />
              <p>All India test series</p>
            </div>
            <div className="batch-advantage-feature">
              <img src={correct} alt="" className="xsm-gif" />
              <p>Learn from mobile phone or laptop</p>
            </div>
            <div className="batch-advantage-feature">
              <img src={correct} alt="" className="xsm-gif" />
              <p>Personalised attention</p>
            </div>
          </div>
        </div>
      </div>

      <DVAPP/>
      <FreeFormSection/>

      {/* <div className="free-form-section">
        <div className="free-form-section-left">
            <h3>Get Free Counselling</h3>
            <form action="#" className="free-form">
            <h4>Book Free Counselling</h4>
            <div className="input-box">
                    <p>Your Name</p>
                    <input type="text" className="input-field"/>
                </div>
                <div className="input-box">
                    <p>Your Email</p>
                    <input type="email" className="input-field"/>
                </div>
                <div className="input-box">
                    <p>Your Phone number</p>
                    <input type="number" className="input-field"/>
                </div>
                <div className="input-box">
                    <p>Select Course</p>
                    <select name="select-course" className="input-field">
                        <option value="nda">NDA exam</option>
                        <option value="cds">CDS exam</option>
                        <option value="cds-ota">CDS OTA exam</option>
                        <option value="afcat">AFCAT exam</option>
                    </select>
                </div>
                <input type="submit" value="Book Now" className="btn-a-solid"/>
            </form>
        </div>
        <div className="free-form-section-right">
            <img src={contactImg} alt="" className="gif"/>
        </div>
      </div> */}

      <TestimonialSection/>
      <AppFeatures/>


      <div className="online-advantage">
        <h3>Advantages</h3>
        <div className="online-advantage-circles">
            <div className="square-card">
                <h4>Self paced Learning</h4>
            </div>
            <div className="square-card">
                <h4>Lower Cost</h4>
            </div><div className="square-card">
                <h4>Comfort</h4>
            </div><div className="square-card">
                <h4>Flexible Schedule</h4>
            </div>
            <div className="square-card">
                <h4>Sample Resources</h4>
            </div>
        </div>
      </div>

      <InquirySection/>

      <div className="faq">
        <div className="faq-left">
            <img src={gif7} alt="" className="gif"/>
        </div>
        <div className="faq-right">
            <h3>FAQ's</h3>
            <details className="faq-question-box">
                <summary className="faq-question">Which online coaching is best for NDA?</summary>
                <p className="faq-answer">Defence Vidya provides you with the best NDA coaching online for students. We have the best faculty and facilities for exam preparation</p>
            </details>
            <details className="faq-question-box">
                <summary className="faq-question">Can I clear NDA in 3 months?</summary>
                <p className="faq-answer">Yes, you can clear the NDA exam in 3 month with dedication and hard works. Start your preparation by an analysing the pattern ans syllabus. You can also joun our batches for NDA prepration</p>
            </details>
            <details className="faq-question-box">
                <summary className="faq-question">Courses available at Defence Vidya?</summary>
                <p className="faq-answer">We have designed our courses for all the defence exams like AFCAT, CDSE, NDA. by subscribing to these courses you will get one of the best study materials, test series and will also get one on one support and guidance.</p>
            </details>
        </div>
      </div>
    </div>
  );
}
