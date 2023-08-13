import React from 'react'
import "../css/TestSeries.css";
import test1 from "../Images/test1.jpg";
import test2 from "../Images/test2.jpg";
import test3 from "../Images/test3.jpg";
import indianFlag from "../Images/indian flag.jpg"
import keyFeatureImg from "../Images/test-series-key-feature.jpg"
import testimonial1 from "../Images/testimonial1.jpeg"
import testimonial2 from "../Images/testimonial2.jpeg"
import testimonial3 from "../Images/testimonial3.jpeg"
import testimonial4 from "../Images/testimonial4.jpeg"
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import quiz from "../Images/quiz.jpg"
import test from "../Images/test.jpg"
import benefits from "../Images/test-series-benefits.jpg"
import TSIL1 from "../Images/TSIL1.jpeg"
import TSIL2 from "../Images/TSIL2.jpeg"
import TSIL3 from "../Images/TSIL3.png"
export default function TestSeries() {
  return (
    <div className='test-series'>
        <div className='test-series-header'>
            <div className="test-series-header-left">
                <h1><span>NDA</span> Test Series</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus omnis quis, similique saepe sapiente atque deleniti facere provident, fugiat eligendi, eum impedit ullam vero cumque iusto debitis fuga commodi ab!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur excepturi nam quod a consectetur repudiandae.</p>
                <button className="btn-a-solid">Explore More</button>
            </div>
            <div className="test-series-header-right">
                <img src={test1} className='test-header-img test-sm-img' alt="" />
                <img src={test2} className='test-header-img test-bg-img' alt="" />
                <img src={test3} className='test-header-img test-sm-img' alt="" />
            </div>
        </div>
        <div className="test-series-why-test">
            <div className="test-series-why-test-left">
                <img src={TSIL2} alt="" />
            </div>
            <div className="test-series-why-test-right">
                <h2>Why <span> Test Series </span>Is Important For You?</h2>
                <p>A typical online test series consists of a bundle of simulated tests based on the latest pattern and tredns associated with the actual exam. Test series will assist you in smooth preparation, Attempting the test series will give you in idea of the exam pattern. It prepare you mentally for an exam like environment. This helps you strategize well. It can help you significantly to attain good marks and to revise the syllabus. The chapter wise analysis will reveal your strength and weakness as well. Test series helps a lot in managing your time. You can check your question solving speed and work accordingly on your weakness. It is like a training to interconnect in different aspects.</p>
            </div>
        </div>

        <div className="test-series-content">
            <h2>Content</h2>
            <div className="test-series-content-features">
                <div className="content-features-box">
                    <h4>Chapter Wise Quizes</h4>
                </div>
                <div className="content-features-box">
                    <h4>6500+ Tests Taken</h4>
                </div>
                <div className="content-features-box">
                    <h4>Full Length Mock Tests</h4>
                </div>
                <div className="content-features-box">
                    <h4>Weekly Current Affairs</h4>
                </div>
            </div>
        </div>


        <div className="test-series-why-test">
            <div className="test-series-why-test-right">
                <h2>Key <span>Point</span> !</h2>
                <li>Real Time Test Experience</li>
                <li>Varied Difficulty Levels</li>
                <li>Most Relevant Exam Questions</li>
                <li>Trusted by 6500+ Students</li>
                <li>Language both Hindi & English</li>
            </div>
            <div className="test-series-why-test-left">
                <img src={TSIL1} alt="" />
            </div>
        </div>


        <div className="test-series-offer-section">
            <h3>Get the test series with <span> SPECIAL DISCOUNT </span>and start your journey of success with Defence Vidya</h3>
        </div>


        <div className="our-test-series">
        <h2>Our <span> Test </span>Series</h2>
        <div className="our-test-series-bottom">
            <div className="test-card">
                <h3>QUIZEES</h3>
                <p>Chapter Wise</p>
                <h4>Rs. 599/-</h4>
                <img src={quiz} alt="" />
                <button className="btn-a-solid">Enroll Now</button>
            </div>
            <div className="test-card">
                <h3>PREVIOUS YEAR EXAM QUESTIONS</h3>
                <p>Mock Test</p>
                <h4>Rs. 499/-</h4>
                <img src={test} alt="" />
                <button className="btn-a-solid">Enroll Now</button>
            </div>
        </div>
    </div>


    <div className="test-series-why-test">
            <div className="test-series-why-test-left">
                <img src={TSIL3} alt="" />
            </div>
            <div className="test-series-why-test-right">
                <h2><span>Benefits</span> of taking Test Series</h2>
                <li>Boost Confidence</li>
                <li>Managing exam anxiety</li>
                <li>It helps you to improve your accuracy and time management skills</li>
                <li>Provides a systematic approach to cover the entire syllabus</li>
                <li>Helps in strategy formulation</li>
            </div>
        </div>


        <div className='testimonial-section'>
        <div className="testimonial-section-top">
            <h3><span>Defence Vidya</span> Testimonial</h3>
        </div>
        <div className="testimonial-section-bottom">
        <div className="testimonial-card">
            <img src={testimonial4} alt="" />
                <div className="feedback">
                    <p>This test series is based on current trend of actual examination. That's why it is very helpful to boost our preparation</p>
                </div>
            </div>
            <div className="testimonial-card">
                <img src={testimonial1} alt="" />
                <div className="feedback">
                    <p>Participating in this test series helpmed me to learn important concepts faster & gave me real time exam experience</p>
                </div>
            </div>


            <div className="testimonial-card">
                <img src={testimonial1} alt="" />
                <div className="feedback">
                    <p>Defence vidya is one of the most trusted online test series for NDA & CDSE</p>
                </div>
            </div>

            <div className="testimonial-card">
                <img src={testimonial1} alt="" />
                <div className="feedback">
                    <p>This test series allows us to take the exam from the comfort of our own home. That's why I loved it</p>
                </div>
            </div>
            
            <div className="testimonial-card">
            <img src={testimonial2} alt="" />
                <div className="feedback">
                    <p>The Defence Vidya test series is a very effective tool for NDA students to practice questions.</p>
                </div>
            </div>
            <div className="testimonial-card">
            <img src={testimonial3} alt="" />
                <div className="feedback">
                    <p>Defence Vidya provides topic wise test series also which is way more helpful for through coverage of entire syllabus</p>
                </div>
            </div>
            <div className="testimonial-card">
            <img src={testimonial4} alt="" />
                <div className="feedback">
                    <p>This test series helps us to provide systematic approach through which we can plan our studies and cover entire syllabus in a proper time</p>
                </div>
            </div>
            <div className="testimonial-card">
            <img src={testimonial1} alt="" />
                <div className="feedback">
                    <p>Attempting questions in the given time is not an easy task, hence this test series helped me to complete exam on time.</p>
                </div>
            </div>
        </div>
            <p className='slide-to-scroll'>Slide To Scroll</p>
    </div>
    </div>
  )
}
