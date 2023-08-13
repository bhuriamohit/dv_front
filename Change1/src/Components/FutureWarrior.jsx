import React from 'react'
import "../css/FutureWarrior.css"
import futureWarriorImg from "../Images/hq-army.jpg"
import futureWarriorImg2 from "../Images/TSIL3.png"
export default function FutureWarrior() {
  return (
    <div className='future-warrior'>
        <div className="future-warrior-left">
            <h1>Future <span>Warrior</span></h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam necessitatibus officiis vel, tempore illum fugit vero delectus a dolore mollitia, est minus labore. Quia sit eligendi animi exercitationem, officiis sint!</p>
            <div className="small-box-section">
                <div className="future-warrior-small-box">
                    <h4>Quality</h4>
                </div>
                <div className="future-warrior-small-box">
                    <h4>Experts Faculty</h4>
                </div>
            </div>
        </div>
        <div className="future-warrior-right">
            <img src={futureWarriorImg2} alt="" />
        </div>
    </div>
  )
}
