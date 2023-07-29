import React from 'react'
import "../css/WhyUs.css"
import whyUsImages from "../Images/whyusImage.png"
import AddTaskIcon from '@mui/icons-material/AddTask';
import WhyUsImg from "../Images/whyusimg.png"
export default function WhyUs() {
    return (
        <div className='why-us-section'>
            <div className="why-us-section-top">
                <h3>Why <span>Us?</span></h3>
                <p>Let's look into the points that how we are ahead of our competitors and why you should choose us over others.</p>
            </div>
            <div className="why-us-section-bottom">
                <div className="why-us-section-bottom-left">
                    <div className="why-us-quality-box">
                        <div className="quality-icon"><AddTaskIcon /></div>
                        <div className="quality-text">
                            <h4>Strategy Building</h4>
                            <p>Mentors can help aspirants in building an effective study plan including time management, resource allocation , and strategy. They can also provide tips and tricks to crack the exam.</p>
                        </div>
                    </div>
                    <div className="why-us-quality-box">
                        <div className="quality-icon"><AddTaskIcon /></div>
                        <div className="quality-text">
                            <h4>Live/Scheduled lectures</h4>
                            <p>Learning is an importat step for achieving dreams in a students journey we encourage the student to explore the concept in depth instead of memorising. The live lectures help us in learning the needs of the students and motivates the students to creative and passionate learning</p>
                        </div>
                    </div>
                    <div className="why-us-quality-box">
                        <div className="quality-icon"><AddTaskIcon /></div>
                        <div className="quality-text">
                            <h4>Affordability</h4>
                            <p>Courses should be pocket feirndly so that every child can afford it.</p>
                        </div>
                    </div>
                    <div className="why-us-quality-box">
                        <div className="quality-icon"><AddTaskIcon /></div>
                        <div className="quality-text">
                            <h4>Quality > Quantity</h4>
                            <p>A student preparing for any examination demands interactive quality content due to the limited number of attempts and age restriction</p>
                        </div>
                    </div>
                    <div className="why-us-quality-box">
                        <div className="quality-icon"><AddTaskIcon /></div>
                        <div className="quality-text">
                            <h4>Motivation and confidence</h4>
                            <p>UPSC preparation can be dounting, and aspirants often feel demotivated and lack confidence. Mentors can provide motivation, encouragement, and emotional supprt to keep the aspirants motivated</p>
                        </div>
                    </div>
                </div>
                <div className="why-us-section-bottom-right">
                    <img src={whyUsImages} alt="" />
                </div>
            </div>
        </div>
    )
}
