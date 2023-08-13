import React from 'react'
import "../css/AppFeatures.css"
import appFeatureImage from "../Images/appFeatureImage.png"
import appFeatureStudyMaterial from "../Images/app features/study materials.png"
import appFeatureMockTest from "../Images/app features/test series.png"
import appFeatureLectures from "../Images/app features/lectures.png"
import appFeatureCourses from "../Images/app features/courses.png"
import appFeaturePhysicalTraining from "../Images/app features/physical training.png"
import appStore from "../Images/appstore.png"
import playStore from "../Images/playstore.png"
import NearMeIcon from '@mui/icons-material/NearMe';

import { Link } from 'react-router-dom'
export default function AppFeatures() {
  const displayStudyMaterial = () => {
    document.getElementById("appFeatureStudyMaterialSection").style.display = "flex";
    document.getElementById("appFeatureMockTestSection").style.display = "none";
    document.getElementById("appFeatureLectureSection").style.display = "none";
    document.getElementById("appFeatureCourseSection").style.display = "none";
    document.getElementById("appFeaturePhysicalTrainingSection").style.display = "none";
  }
  const displayMockTest = () => {
    document.getElementById("appFeatureStudyMaterialSection").style.display = "none";
    document.getElementById("appFeatureMockTestSection").style.display = "flex";
    document.getElementById("appFeatureLectureSection").style.display = "none";
    document.getElementById("appFeatureCourseSection").style.display = "none";
    document.getElementById("appFeaturePhysicalTrainingSection").style.display = "none";
  }
  const displayCourse = () => {
    document.getElementById("appFeatureStudyMaterialSection").style.display = "none";
    document.getElementById("appFeatureMockTestSection").style.display = "none";
    document.getElementById("appFeatureLectureSection").style.display = "none";
    document.getElementById("appFeatureCourseSection").style.display = "flex";
    document.getElementById("appFeaturePhysicalTrainingSection").style.display = "none";
  }
  const displayLecture = () => {
    document.getElementById("appFeatureStudyMaterialSection").style.display = "none";
    document.getElementById("appFeatureMockTestSection").style.display = "none";
    document.getElementById("appFeatureLectureSection").style.display = "flex";
    document.getElementById("appFeatureCourseSection").style.display = "none";
    document.getElementById("appFeaturePhysicalTrainingSection").style.display = "none";
  }
  const displayPhysicalTraining = () => {
    document.getElementById("appFeatureStudyMaterialSection").style.display = "none";
    document.getElementById("appFeatureMockTestSection").style.display = "none";
    document.getElementById("appFeatureLectureSection").style.display = "none";
    document.getElementById("appFeatureCourseSection").style.display = "none";
    document.getElementById("appFeaturePhysicalTrainingSection").style.display = "flex";
  }
  return (
    <div className='app-features'>
        <h6>100% Satisfaction Guarantee</h6>
        <h3><span>App</span> Features</h3>
        <div className='app-features-buttons'>
            <button className='btn-a-outline' onClick={displayStudyMaterial}>Study Material</button>
            <button className='btn-a-outline' onClick={displayLecture}>Lectures</button>
            <button className='btn-a-outline' onClick={displayMockTest}>Mock Tests</button>
            <button className='btn-a-outline' onClick={displayCourse}>Courses</button>
            <button className='btn-a-outline' onClick={displayPhysicalTraining}>Physical Training</button>
        </div>
        <div className='app-feature-main-section' id='appFeatureStudyMaterialSection'>
            <div className='app-feature-main-section-left'>
             <h3>Study Material</h3>
              <span><NearMeIcon/><p>Exhaustive theory with practice questions</p></span>
              <span><NearMeIcon/><p>Past 5 years questions </p></span>
              <span><NearMeIcon/><p>chapterwise mindmaps in pdf</p></span>
            </div>
            <div className='app-feature-main-section-right'>
                <img src={appFeatureStudyMaterial}/>
            </div>
        </div>
        <div className='app-feature-main-section' id='appFeatureMockTestSection'>
            <div className='app-feature-main-section-left'>
             <h3>Mock Tests</h3>
              <span><NearMeIcon/><p>Help to build both the theory and numeric section </p></span>
              <span><NearMeIcon/><p>Try to cover all possible types of questions as per the latest trend </p></span>
              <span><NearMeIcon/><p>each mock test is designed the same as the actual paper of the exam</p></span>
            </div>
            <div className='app-feature-main-section-right'>
                <img src={appFeatureMockTest}/>
            </div>
        </div>
        <div className='app-feature-main-section' id='appFeatureLectureSection'>
            <div className='app-feature-main-section-left'>
             <h3>Lectures</h3>
              <span><NearMeIcon/><p>Daily 5-6 hours lecture for written examination</p></span>
              <span><NearMeIcon/><p>weekly mock test </p></span>
              <span><NearMeIcon/><p>daily problem solving sessions </p></span>
              <span><NearMeIcon/><p>Ssb guidence from Ex-SSB officers </p></span>
            </div>
            <div className='app-feature-main-section-right'>
                <img src={appFeatureLectures}/>
            </div>
        </div>
        <div className='app-feature-main-section' id='appFeatureCourseSection'>
            <div className='app-feature-main-section-left'>
             <h3>Courses</h3>
              <span><NearMeIcon/><p>NDA foundation 11th+12th</p></span>
              <span><NearMeIcon/><p> NDA 6 month </p></span>
              <span><NearMeIcon/><p>CDSE</p></span>
              <span><NearMeIcon/><p>AFCAT</p></span>
              <span><NearMeIcon/><p>CDSE OTA</p></span>
            </div>
            <div className='app-feature-main-section-right'>
                <img src={appFeatureCourses}/>
            </div>
        </div>
        <div className='app-feature-main-section' id='appFeaturePhysicalTrainingSection'>
            <div className='app-feature-main-section-left'>
             <h3>Physical Training vidoes for NDA CDSE,AFCAT,OTA</h3>
              <span><NearMeIcon/><p>cardiorespiratory endurance ,muscle and strength, fitness basics</p></span>
              <span><NearMeIcon/><p>exclusive one on one interaction  for NDA Foundation </p></span>
            </div>
            <div className='app-feature-main-section-right'>
                <img src={appFeaturePhysicalTraining}/>
            </div>
        </div>
        <div className='app-feature-download-app'>
            <img src={playStore} />
            <img src={appStore} />
        </div>
    </div>
  )
}
