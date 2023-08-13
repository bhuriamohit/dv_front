import React, { useEffect, useState } from 'react'
import "../css/StudyMaterial.css"
import StudyMaterialCard from './StudyMaterialCard'
import CancelIcon from '@mui/icons-material/Cancel';
import pdf from "../Images/pdfIcon.png"
export default function StudyMaterial() {

  const closeStudyMaterialPopup = () =>{
    document.getElementById("studyMaterialPopup").style.display = "none";
  }
  const ndaopenStudyMaterialPopup = () =>{
    document.getElementById("studyMaterialPopup").style.display = "flex";
    document.getElementById("ndaNotesLink1").style.display = "flex";
    document.getElementById("ndaNotesLink2").style.display = "flex";
    document.getElementById("ndaNotesLink3").style.display = "flex";
    document.getElementById("ndaNotesLink4").style.display = "flex";
    document.getElementById("cdsNotesLink1").style.display = "none";
    document.getElementById("cdsNotesLink2").style.display = "none";
    document.getElementById("cdsNotesLink3").style.display = "none";
    document.getElementById("cdsNotesLink4").style.display = "none";
    document.getElementById("afcatNotesLink1").style.display = "none";
    document.getElementById("afcatNotesLink2").style.display = "none";
    document.getElementById("afcatNotesLink3").style.display = "none";
    document.getElementById("afcatNotesLink4").style.display = "none";
  }
  const cdsopenStudyMaterialPopup = () =>{
    document.getElementById("studyMaterialPopup").style.display = "flex";
    document.getElementById("ndaNotesLink1").style.display = "none";
    document.getElementById("ndaNotesLink2").style.display = "none";
    document.getElementById("ndaNotesLink3").style.display = "none";
    document.getElementById("ndaNotesLink4").style.display = "none";
    document.getElementById("cdsNotesLink1").style.display = "flex";
    document.getElementById("cdsNotesLink2").style.display = "flex";
    document.getElementById("cdsNotesLink3").style.display = "flex";
    document.getElementById("cdsNotesLink4").style.display = "flex";
    document.getElementById("afcatNotesLink1").style.display = "none";
    document.getElementById("afcatNotesLink2").style.display = "none";
    document.getElementById("afcatNotesLink3").style.display = "none";
    document.getElementById("afcatNotesLink4").style.display = "none";
  }
  const afcatopenStudyMaterialPopup = () =>{
    document.getElementById("studyMaterialPopup").style.display = "flex";
    document.getElementById("cdsNotesLink1").style.display = "none";
    document.getElementById("cdsNotesLink2").style.display = "none";
    document.getElementById("cdsNotesLink3").style.display = "none";
    document.getElementById("cdsNotesLink4").style.display = "none";
    document.getElementById("ndaNotesLink1").style.display = "none";
    document.getElementById("ndaNotesLink2").style.display = "none";
    document.getElementById("ndaNotesLink3").style.display = "none";
    document.getElementById("ndaNotesLink4").style.display = "none";
    document.getElementById("afcatNotesLink1").style.display = "flex";
    document.getElementById("afcatNotesLink2").style.display = "flex";
    document.getElementById("afcatNotesLink3").style.display = "flex";
    document.getElementById("afcatNotesLink4").style.display = "flex";
  }
  return (
    <div className='study-material-section'>
      <div className="study-material-popup" id='studyMaterialPopup'>
        <div className="study-material-popup-box">
        <CancelIcon id="studyMaterialCloseIcon" onClick={closeStudyMaterialPopup}/>
          <div className="study-material-pdf-section">
              <a href="#" download={true} id='ndaNotesLink1'>
                <div className="study-material-pdf-card">
                  <img src={pdf} alt="" />
                  <p>NDA handwritten notes</p>
                </div>
              </a>
              <a href="#" download={true} id='ndaNotesLink2'>
                <div className="study-material-pdf-card">
                  <img src={pdf} alt="" />
                  <p>NDA handwritten notes</p>
                </div>
              </a>
              <a href="#" download={true} id='ndaNotesLink3'>
                <div className="study-material-pdf-card">
                  <img src={pdf} alt="" />
                  <p>NDA handwritten notes</p>
                </div>
              </a>
              <a href="#" download={true} id='ndaNotesLink4'>
                <div className="study-material-pdf-card">
                  <img src={pdf} alt="" />
                  <p>NDA handwritten notes</p>
                </div>
              </a>
              <a href="#" download={true} id='cdsNotesLink1'>
                <div className="study-material-pdf-card">
                  <img src={pdf} alt="" />
                  <p>CDS handwritten notes 1</p>
                </div>
              </a>
              <a href="#" download={true} id='cdsNotesLink2'>
                <div className="study-material-pdf-card">
                  <img src={pdf} alt="" />
                  <p>CDS handwritten notes 2</p>
                </div>
              </a>
              <a href="#" download={true} id='cdsNotesLink3'>
                <div className="study-material-pdf-card">
                  <img src={pdf} alt="" />
                  <p>CDS handwritten notes 3</p>
                </div>
              </a>
              <a href="#" download={true} id='cdsNotesLink4'>
                <div className="study-material-pdf-card">
                  <img src={pdf} alt="" />
                  <p>CDS handwritten notes 4</p>
                </div>
              </a>
              <a href="#" download={true} id='afcatNotesLink1'>
                <div className="study-material-pdf-card">
                  <img src={pdf} alt="" />
                  <p>AFCAT handwritten notes 1</p>
                </div>
              </a>
              <a href="#" download={true} id='afcatNotesLink2'>
                <div className="study-material-pdf-card">
                  <img src={pdf} alt="" />
                  <p>AFCAT handwritten notes 2</p>
                </div>
              </a>
              <a href="#" download={true} id='afcatNotesLink3'>
                <div className="study-material-pdf-card">
                  <img src={pdf} alt="" />
                  <p>AFCAT handwritten notes 3</p>
                </div>
              </a>
              <a href="#" download={true} id='afcatNotesLink4'>
                <div className="study-material-pdf-card">
                  <img src={pdf} alt="" />
                  <p>AFCAT handwritten notes 4</p>
                </div>
              </a>
          </div>
          <div className="study-material-popup-buttons">
            <button className="btn-a-solid">Register Now</button>
            <button className="btn-a-solid">View All Notes</button>
          </div>
        </div>
      </div>
      <div className="study-material-section-top">
        <h3>Free <span>Study</span> Material</h3>
      </div>
      <div className="study-material-section-middle">
        {/* {
          studydata?.map((item) => {
            return <StudyMaterialCard {...item} key={item._id} />
          })
        } */}
        {/* <StudyMaterialCard title="Title 1" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquid voluptate omnis distinctio numquam molestiae!" />
        <StudyMaterialCard title="Title 2" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquid voluptate omnis distinctio numquam molestiae!" />
        <StudyMaterialCard title="Title 3" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, aliquid voluptate omnis distinctio numquam molestiae!" /> */}
        <div className="study-material-clickable-card" id='study-material-clickable-card-1' onClick={ndaopenStudyMaterialPopup}></div>
        <div className="study-material-clickable-card" id='study-material-clickable-card-2' onClick={cdsopenStudyMaterialPopup}></div>
        <div className="study-material-clickable-card" id='study-material-clickable-card-3' onClick={afcatopenStudyMaterialPopup}></div>
      </div>
      <div className="study-material-section-bottom">
        <a href="study-material" className="btn-a-solid">All Study Material</a>
      </div>
    </div>
  )
}
