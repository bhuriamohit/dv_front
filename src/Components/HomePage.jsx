import React , {useEffect} from 'react'
import Navbar from './Navbar'
import "../css/HomePage.css"
import homeArmyVideo from "../Videos/Home Army.mp4"
import LearningPlatform from './LearningPlatform'
import WhyUs from './WhyUs'
import StudyMaterial from './StudyMaterial'
import Acheivements from './Acheivements'
import LectureSection from './LectureSection'
import CourseSection from './CourseSection'
import TestimonialSection from './TestimonialSection'
import Footer from './Footer'
import brochure1 from "../Images/clientImage.jpg"
import brochure2 from "../Images/StudyBg.jpg"
import brochure3 from "../Images/defenceBg.jpg"
import clientImage from "../Images/clientImage.jpg"
import { Helmet } from 'react-helmet'
import { Link } from 'react-router-dom'
import InquirySection from './InquirySection'
import FacultySection from "./FacultySection"
import contactImg from "../Images/councellingImg.png"
import FutureWarrior from './FutureWarrior'
import FreeFormSection from "./FreeFormSection"
import brochureFile from '../brochure/ndabrochure.pdf';
import cds from '../brochure/cds.pdf'
import afcat from '../brochure/afcat.pdf'
import defenceVidyaLandingVideo from "../Videos/defence vidya landing page video.mov"
import dfImg1 from "../Images/dfImg1.jpg"
import dfImg2 from "../Images/dfImg2.jpg"
import dfImg3 from "../Images/dfImg3.jpg"
import dfImg4 from "../Images/test-series-key-feature.jpg"
import afcatImg from "../Images/afcatimg.jpg"
import ots from "../brochure/ota.pdf"
export default function HomePage() {
 
  const handleDownloadnda = () => {
    const link = document.createElement('a');
    link.href = brochureFile;
    link.target = '_blank'; // Open in a new tab
    link.download = 'ndabrochure.pdf'; // Set the desired filename for the downloaded PDF
    link.click();
  };
  const handleDownloadcds = () => {
    const link = document.createElement('a');
    link.href = cds;
    link.target = '_blank'; // Open in a new tab
    link.download = 'cds.pdf'; // Set the desired filename for the downloaded PDF
    link.click();
  };
  const handleDownloadafcat = () => {
    const link = document.createElement('a');
    link.href = afcat;
    link.target = '_blank'; // Open in a new tab
    link.download = 'afcat.pdf'; // Set the desired filename for the downloaded PDF
    link.click();
  };
  const handleDownloadaota = () => {
    const link = document.createElement('a');
    link.href = afcat;
    link.target = '_blank'; // Open in a new tab
    link.download = 'ota.pdf'; // Set the desired filename for the downloaded PDF
    link.click();
  };
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
            <title> Defence Vidya | Home Page</title>
            <meta
              name="description"
              content="Your Organization provides online education for NDA and CDS exams. Prepare for the exams with our comprehensive courses and expert instructors."
            />
            <link rel="icon" href="../Images/blacklogo.png" type="image/x-icon"/>
          </Helmet>
        <div className="home-header">
            <video src={defenceVidyaLandingVideo} autoPlay loop muted></video>
            <div className="home-header-text">
                <p>Welcome To</p>
                <h1>Defence Vidya</h1>
                <p>One of the highly prestigious and highly affordable online platform to prepare for all defence exam</p>
            </div>
        </div>
        <LearningPlatform/>
        <WhyUs/>
        <Acheivements/>
        <StudyMaterial/>
        <FutureWarrior/>
        <CourseSection/>
        <FacultySection/>
        <div className="army-background"></div>
        <LectureSection/>
        <InquirySection/>
        <div className="brochure-section">
          <div className="brochure-card">
            <img src={dfImg1} alt="" />
            <h4>NDA</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum optio dignissimos ipsa autem enim. Officiis incidunt eum magni fugit perferendis pariatur doloremque placeat eveniet?</p>
            <Link to={"nda-course"} className="btn-a-solid">More Details</Link>
            <button onClick={handleDownloadnda} className="btn-a-outline">
        Download Brochure
      </button>
          </div>
          <div className="brochure-card">
          <img src={dfImg2} alt="" />
            <h4>CDS</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum optio dignissimos ipsa autem enim. Officiis incidunt eum magni fugit perferendis pariatur doloremque placeat eveniet?</p>
            <Link to={"cds-course"} className="btn-a-solid">More Details</Link>
            <button onClick={handleDownloadcds} className="btn-a-outline">
          
        Download Brochure
      </button>
          </div>
          <div className="brochure-card">
          <img src={dfImg3} alt="" />
            <h4>CDS OTA</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum optio dignissimos ipsa autem enim. Officiis incidunt eum magni fugit perferendis pariatur doloremque placeat eveniet?</p>
            <Link to={"cds-course"} className="btn-a-solid">More Details</Link>
            <button onClick={handleDownloadaota} className="btn-a-outline">
        Download Brochure
      </button>
          </div>
          <div className="brochure-card">
          <img src={afcatImg} alt="" />
            <h4>AFCAT</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat nostrum optio dignissimos ipsa autem enim. Officiis incidunt eum magni fugit perferendis pariatur doloremque placeat eveniet?</p>
            <Link to={"afcat-course"} className="btn-a-solid">More Details</Link>
            <button onClick={handleDownloadafcat} className="btn-a-outline">
        Download Brochure
      </button>
          </div>
        </div>
        <div className="client-change-image-section">
          <img src={dfImg3} alt="" />
        </div>
        <TestimonialSection/>

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
      <FreeFormSection/>


        <div className="home-faq-section">
          <h3>FAQ's</h3>
          <details className="faq-question-box">
                <summary className="faq-question">Will defence vidya be live or recorded?</summary>
                <p className="faq-answer">Each subject will have live classses (If students miss one, they can watch recorded lectures)</p>
            </details>
            <details className="faq-question-box">
                <summary className="faq-question">Is the course fee paid monthly or anually?</summary>
                <p className="faq-answer">The course fee is paid yearly in one lump sum.</p>
            </details>
            <details className="faq-question-box">
                <summary className="faq-question">Can I sudy defence exam online?</summary>
                <p className="faq-answer">Online defence exam classes provide the flexibility to use commuting and waiting time for learning from the videos.</p>
            </details>
            <details className="faq-question-box">
                <summary className="faq-question">How should I pay?</summary>
                <p className="faq-answer">The defence vidya website homepage has a section that showing the payment process</p>
            </details>
            <details className="faq-question-box">
                <summary className="faq-question">What time will the course be over?</summary>
                <p className="faq-answer">Depend your course validity</p>
            </details>
        </div>
    </>
  )
}
