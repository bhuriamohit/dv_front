import React , {useEffect} from 'react'
import "../css/AboutUsPage.css"
import InstagramIcon from '@mui/icons-material/Instagram';
import aboutDefence from "../Images/learningPlatform.png"
import TestimonialSection from './TestimonialSection';
import TeamCard from './TeamCard';
import WhyUs from "./WhyUs"
import boy1 from "../Images/boy1.jpg"
import boy2 from "../Images/boy2.jpg"
import girl1 from "../Images/girl1.jpg"
import girl2 from "../Images/girl2.jpg"
import girl3 from "../Images/girl3.jpg"
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Helmet } from 'react-helmet';
import FacultySection from './FacultySection';
export default function AboutUsPage() {
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
            <title>About Us</title>
            <meta
              name="description"
              content="Your Organization provides online education for NDA and CDS exams. Prepare for the exams with our comprehensive courses and expert instructors."
            />
          </Helmet>
    <div className='about-us-header'>
        <h1>Who We <br/><span>Are?</span></h1>
        <p>At Defence Vidya, we understand the unique challenges and aspirations of individuals who aspire to join the esteemed armed forces and serve their nation with pride.</p>
    </div>
    <div className="about-defence-vidya">
        <div className="about-defence-vidya-text">
            <h3>Know About <br/><span>Defence Vidya</span></h3>
            <p>At Defence Vidya, we understand the unique challenges and aspirations of individuals who aspire to join the esteemed armed forces and serve their nation with pride.</p>
            <p>Our mission is to provide comprehensive and accessible online learning resources to help you achieve your dreas! We understand that preparation for defence services exams requires a strategic and disciplined approach therefore our platform is designed to cater to the diverse needs of aspirants preparing for exams such as the National Defence Academy(NDA), Combined Defence Services(CDS), Air Force Common Admission Test(AFCAT), Indian Navy Entrance Test(INET) and more. Whether you are a beginner taking your first steps in the defence services exams or an experienced candidate aiming to enhance your knowledge and skills, Defence Vidya is here to guide you every step of the way.</p>
            {/* <a href="#"><InstagramIcon className="defence-icon"/></a> */}
            <div className="social-media-links">
            <a href="#" aria-label="instagram icon"><InstagramIcon className="social-media-icon" /></a>
            <a href="#" aria-label="facebook icon"><FacebookIcon className="social-media-icon" /></a>
            <a href="#" aria-label="linkedin icon"><LinkedInIcon className="social-media-icon" /></a>
            <a href="#" aria-label="twitter icon"><TwitterIcon className="social-media-icon" /></a>
          </div>
        </div>
        <div className="about-defence-image">
            <img src={aboutDefence} alt="about-defence-image" />
        </div>
    </div>
    <TestimonialSection/>
    <div className="defence-bg"></div>
    <WhyUs/>
    <FacultySection/>
    </>

  )
}
