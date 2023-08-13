import React from 'react'
import "../css/EBookSection.css"
import ndaE1 from "../Images/ndsaposter (1)/1.png"
import ndaE2 from "../Images/ndsaposter (1)/2.png"
import ndaE3 from "../Images/ndsaposter (1)/3.png"
import ndaE4 from "../Images/ndsaposter (1)/4.png"

import cdsE1 from "../Images/cdsposter (1)/1.png"
import cdsE2 from "../Images/cdsposter (1)/2.png"
import cdsE3 from "../Images/cdsposter (1)/3.png"
import cdsE4 from "../Images/cdsposter (1)/4.png"

import afcatE1 from "../Images/afcatposter (1)/1.png"
import afcatE2 from "../Images/afcatposter (1)/2.png"
import afcatE3 from "../Images/afcatposter (1)/3.png"
import afcatE4 from "../Images/afcatposter (1)/4.png"

import ndaN1 from "../Images/handwritten nda poster/1.png"
import ndaN2 from "../Images/handwritten nda poster/2.png"
import ndaN3 from "../Images/handwritten nda poster/3.png"
import ndaN4 from "../Images/handwritten nda poster/4.png"

import cdsN1 from "../Images/handwritten cds poster/1.png"
import cdsN2 from "../Images/handwritten cds poster/2.png"
import cdsN3 from "../Images/handwritten cds poster/3.png"
import cdsN4 from "../Images/handwritten cds poster/4.png"

import afcatN1 from "../Images/handwritten afcat poster/1.png"
import afcatN2 from "../Images/handwritten afcat poster/2.png"
import afcatN3 from "../Images/handwritten afcat poster/3.png"
import afcatN4 from "../Images/handwritten afcat poster/4.png"


export default function EBookSection() {
  return (
    <div className='e-book-section'>
        <div className="e-book-section-header">
            <h2>E-Book</h2>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta assumenda blanditiis neque veritatis eveniet deserunt enim, magnam incidunt minus distinctio!</p>
        </div>
        <div className="course-book-section" id='ndaEBook'>
            <h3>NDA E-Book</h3>
            <div className="e-book-flex">
              <div className="e-book-card">
                <a href="#"><img src={ndaE1} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={ndaE2} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={ndaE3} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={ndaE4} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={ndaN1} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={ndaN2} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={ndaN3} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={ndaN4} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
            </div>
        </div>
        <div className="course-book-section" id='cdsEBook'>
            <h3>CDS E-Book</h3>
            <div className="e-book-flex">
            <div className="e-book-card">
                <a href="#"><img src={cdsE1} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={cdsE2} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={cdsE3} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={cdsE4} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={cdsN1} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={cdsN2} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={cdsN3} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={cdsN4} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
            </div>
        </div>
        <div className="course-book-section" id='afcatEBook'>
            <h3>AFCAT E-Book</h3>
            <div className="e-book-flex">
            <div className="e-book-card">
                <a href="#"><img src={afcatE1} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={afcatE2} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={afcatE3} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={afcatE4} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={afcatN1} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={afcatN2} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={afcatN3} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
              <div className="e-book-card">
                <a href="#"><img src={afcatN4} alt="" /></a>
                <div className="e-book-card-bottom">
                  <p>Rs. 99/-</p>
                  <button className="btn-a-solid">Register</button>
                  <button className="btn-a-solid">Buy Now</button>
                </div>
              </div>
            </div>
        </div>
      </div>
  )
}
