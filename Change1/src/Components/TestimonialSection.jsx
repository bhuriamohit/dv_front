import React from 'react'
import "../css/TestimonialSection.css"
import testimonial1 from "../Images/testimonial1.jpeg"
import testimonial2 from "../Images/testimonial2.jpeg"
import testimonial3 from "../Images/testimonial3.jpeg"
import testimonial4 from "../Images/testimonial4.jpeg"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
export default function TestimonialSection() {
  return (
    <div className='testimonial-section'>
        <div className="testimonial-section-top">
            <h3><span>Our</span> Testimonial</h3>
            <p>Meet our testimonials and read their greetful feedbacks.</p>
        </div>
        <div className="testimonial-section-bottom">
        <div className="testimonial-card">
            <img src={testimonial4} alt="" />
                <div className="star-box">
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                </div>
                <div className="name-box">
                    <h5>Prateek Singh</h5>
                    <p>NDA Asspirant</p>
                </div>
                <div className="feedback">
                    <p>I vividly remember my journey with Defence Vidya, the premier defence coaching center that played a pivotal role in my success in the CDS exam. From the moment I stepped through their doors, I was greeted with a warm and motivating environment that instilled confidence in me.</p>
                </div>
            </div>
            <div className="testimonial-card">
                <img src={testimonial1} alt="" />
                <div className="star-box">
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                </div>
                <div className="name-box">
                    <h5>Stuti Sharma</h5>
                    <p>NDA Asspirant</p>
                </div>
                <div className="feedback">
                    <p>It was the most affordable online platform I could find on the internet. Teachin technique is great</p>
                </div>
            </div>


            <div className="testimonial-card">
                <img src={testimonial1} alt="" />
                <div className="star-box">
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                </div>
                <div className="name-box">
                    <h5>Vikas Sharma</h5>
                    <p>NDA Asspirant</p>
                </div>
                <div className="feedback">
                    <p>It was a family like feeling with defence vidya , i got one on one guidance from the experienced members.</p>
                </div>
            </div>

            <div className="testimonial-card">
                <img src={testimonial1} alt="" />
                <div className="star-box">
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                </div>
                <div className="name-box">
                    <h5>Nitin Kumar</h5>
                    <p>NDA Asspirant</p>
                </div>
                <div className="feedback">
                    <p>Best study material, best teaching technique, best experience. This is the easiest way I can explain defence vidya</p>
                </div>
            </div>
            
            <div className="testimonial-card">
            <img src={testimonial2} alt="" />
                <div className="star-box">
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarHalfIcon className='icon'/>
                </div>
                <div className="name-box">
                    <h5>Varun Kumar</h5>
                    <p>NDA Asspirant</p>
                </div>
                <div className="feedback">
                    <p>I desided to take this course during my first attempt and guess what I cleared the written exam. You can trust this platform for sure.</p>
                </div>
            </div>
            <div className="testimonial-card">
            <img src={testimonial3} alt="" />
                <div className="star-box">
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                </div>
                <div className="name-box">
                    <h5>Aryan Tiwari</h5>
                    <p>NDA Asspirant</p>
                </div>
                <div className="feedback">
                    <p>My experience with Defence Vidya can be summarized as a journey of personal growth, academic excellence, and relentless determination with a team of passionate mentors who were dedicated to helping me achieve my goals. I whole heartedly recommend Defence Vidya to anyone aspiring to excel in defense services exams</p>
                </div>
            </div>
            <div className="testimonial-card">
            <img src={testimonial4} alt="" />
                <div className="star-box">
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                    <StarIcon className='icon'/>
                </div>
                <div className="name-box">
                    <h5>Ayushi Gupta</h5>
                    <p>NDA Asspirant</p>
                </div>
                <div className="feedback">
                    <p>Defence Vidya's comprehensive study material were a treasure trove of information. The video lectures were engaging, and the practic etests were challenging yet alligned with the actual exam. I owe my success to the relentless efforts of Defence VIdya in shaping me into a confident and well prepared candidate. I am immensely grateful for their guidance and support</p>
                </div>
            </div>
        </div>
            <p className='slide-to-scroll'>Slide To Scroll</p>
    </div>
  )
}
