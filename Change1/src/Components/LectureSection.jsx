import React from 'react'
import "../css/LectureSection.css"
import LectureCard from './LectureCard'
import thumbnail1 from "../Images/thumbnail1.png"
import thumbnail2 from "../Images/thumbnail2.png"
import thumbnail3 from "../Images/thumbnail3.png"
import CancelIcon from '@mui/icons-material/Cancel';

import { Link } from 'react-router-dom'
export default function LectureSection() {
  const closewatchLecturePopup = () =>{
    document.getElementById("watchLecturePopup").style.display = "none";
  }
  const openNDALecturePopup = () =>{
    document.getElementById("watchLecturePopup").style.display = "flex";
    document.getElementById("NdaLecurePopupVideo1").style.display = "flex";
    document.getElementById("NdaLecurePopupVideo2").style.display = "flex";
    document.getElementById("NdaLecurePopupVideo3").style.display = "flex";
    document.getElementById("NdaLecurePopupVideo4").style.display = "flex";

    document.getElementById("CdsLecurePopupVideo1").style.display = "none";
    document.getElementById("CdsLecurePopupVideo2").style.display = "none";
    document.getElementById("CdsLecurePopupVideo3").style.display = "none";
    document.getElementById("CdsLecurePopupVideo4").style.display = "none";

    document.getElementById("AfcatLecurePopupVideo1").style.display = "none";
    document.getElementById("AfcatLecurePopupVideo2").style.display = "none";
    document.getElementById("AfcatLecurePopupVideo3").style.display = "none";
    document.getElementById("AfcatLecurePopupVideo4").style.display = "none";
  }

  const openCDSLecturePopup = () =>{
    document.getElementById("watchLecturePopup").style.display = "flex";
    document.getElementById("NdaLecurePopupVideo1").style.display = "none";
    document.getElementById("NdaLecurePopupVideo2").style.display = "none";
    document.getElementById("NdaLecurePopupVideo3").style.display = "none";
    document.getElementById("NdaLecurePopupVideo4").style.display = "none";

    document.getElementById("CdsLecurePopupVideo1").style.display = "flex";
    document.getElementById("CdsLecurePopupVideo2").style.display = "flex";
    document.getElementById("CdsLecurePopupVideo3").style.display = "flex";
    document.getElementById("CdsLecurePopupVideo4").style.display = "flex";

    document.getElementById("AfcatLecurePopupVideo1").style.display = "none";
    document.getElementById("AfcatLecurePopupVideo2").style.display = "none";
    document.getElementById("AfcatLecurePopupVideo3").style.display = "none";
    document.getElementById("AfcatLecurePopupVideo4").style.display = "none";
  }
  const openAFCATLecturePopup = () =>{
    document.getElementById("watchLecturePopup").style.display = "flex";
    document.getElementById("NdaLecurePopupVideo1").style.display = "none";
    document.getElementById("NdaLecurePopupVideo2").style.display = "none";
    document.getElementById("NdaLecurePopupVideo3").style.display = "none";
    document.getElementById("NdaLecurePopupVideo4").style.display = "none";

    document.getElementById("CdsLecurePopupVideo1").style.display = "none";
    document.getElementById("CdsLecurePopupVideo2").style.display = "none";
    document.getElementById("CdsLecurePopupVideo3").style.display = "none";
    document.getElementById("CdsLecurePopupVideo4").style.display = "none";

    document.getElementById("AfcatLecurePopupVideo1").style.display = "flex";
    document.getElementById("AfcatLecurePopupVideo2").style.display = "flex";
    document.getElementById("AfcatLecurePopupVideo3").style.display = "flex";
    document.getElementById("AfcatLecurePopupVideo4").style.display = "flex";
  }
  return (
    <div className='lecture-section'>
    <div className="watch-lecture-popup" id='watchLecturePopup'>
        <div className="watch-lecture-popup-box">
        <CancelIcon id="watchLectureCloseIcon" onClick={closewatchLecturePopup}/>
          <div className="watch-lecture-pdf-section">
            <div className="watch-lecture-popup-card" id='NdaLecurePopupVideo1'>
              <a href="#">
                <img src={thumbnail1} alt="" />
                <p>Title of the Video 1</p>
              </a>
            </div>
            <div className="watch-lecture-popup-card" id='NdaLecurePopupVideo2'>
              <a href="#">
                <img src={thumbnail2} alt="" />
                <p>Title of the Video 1</p>
              </a>
            </div>
            <div className="watch-lecture-popup-card" id='NdaLecurePopupVideo3'>
              <a href="#">
                <img src={thumbnail3} alt="" />
                <p>Title of the Video 1</p>
              </a>
            </div>
            <div className="watch-lecture-popup-card" id='NdaLecurePopupVideo4'>
              <a href="#">
                <img src={thumbnail1} alt="" />
                <p>Title of the Video 1</p>
              </a>
            </div>
            <div className="watch-lecture-popup-card" id='CdsLecurePopupVideo1'>
              <a href="#">
                <img src={thumbnail2} alt="" />
                <p>Title of the Video 1</p>
              </a>
            </div>
            <div className="watch-lecture-popup-card" id='CdsLecurePopupVideo2'>
              <a href="#">
                <img src={thumbnail3} alt="" />
                <p>Title of the Video 1</p>
              </a>
            </div>
            <div className="watch-lecture-popup-card" id='CdsLecurePopupVideo3'>
              <a href="#">
                <img src={thumbnail1} alt="" />
                <p>Title of the Video 1</p>
              </a>
            </div>
            <div className="watch-lecture-popup-card" id='CdsLecurePopupVideo4'>
              <a href="#">
                <img src={thumbnail2} alt="" />
                <p>Title of the Video 1</p>
              </a>
            </div>
            <div className="watch-lecture-popup-card" id='AfcatLecurePopupVideo1'>
              <a href="#">
                <img src={thumbnail3} alt="" />
                <p>Title of the Video 1</p>
              </a>
            </div>
            <div className="watch-lecture-popup-card" id='AfcatLecurePopupVideo2'>
              <a href="#">
                <img src={thumbnail1} alt="" />
                <p>Title of the Video 1</p>
              </a>
            </div>
            <div className="watch-lecture-popup-card" id='AfcatLecurePopupVideo3'>
              <a href="#">
                <img src={thumbnail2} alt="" />
                <p>Title of the Video 1</p>
              </a>
            </div>
            <div className="watch-lecture-popup-card" id='AfcatLecurePopupVideo4'>
              <a href="#">
                <img src={thumbnail3} alt="" />
                <p>Title of the Video 1</p>
              </a>
            </div>
          </div>
          <div className="watch-lecture-popup-buttons">
            <button className="btn-a-solid">Register Now</button>
            <button className="btn-a-solid">Watch All Lectures</button>
          </div>
        </div>
      </div>
        <div className="lecture-section-top">
            <h3><span>Watch</span> Lecture</h3>
        </div>
        <div className="lecture-section-middle">
           <div className="watch-lecture-card">
            <h2>&nbsp;</h2>
            <button className='btn-a-solid' onClick={openNDALecturePopup}>Watch Now</button>
           </div>
           <div className="watch-lecture-card">
            <h2>&nbsp;</h2>
            <button className='btn-a-solid' onClick={openCDSLecturePopup}>Watch Now</button>
           </div>
           <div className="watch-lecture-card">
            <h2>&nbsp;</h2>
            <button className='btn-a-solid' onClick={openAFCATLecturePopup}>Watch Now</button>
           </div>
        </div>
        <div className="lecture-section-bottom">
            <Link to="course" className="btn-a-solid">View All Lectures</Link>
        </div>
    </div>
  )
}
