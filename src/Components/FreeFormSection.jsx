import React, { useState } from 'react';
import contactImg from "../Images/councellingImg.png";

export default function FreeFormSection() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [course, setCourse] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            phoneNumber,
            course
        };

        fetch('https://smiling-blue-hosiery.cyclic.app/api/user/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => {
                if (response.ok) {
                    // Form submission successful
                    console.log('Form submitted successfully');
                } else {
                    // Form submission failed
                    console.log('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <div className="free-form-section">
            <div className="free-form-section-left">
                <h3>Get Free Counselling</h3>
                <form action="#" className="free-form" onSubmit={handleSubmit}>
                    <h4>Book Free Counselling</h4>
                    <div className="input-box">
                        <p>Your Name</p>
                        <input type="text" className="input-field" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <p>Your Email</p>
                        <input type="email" className="input-field" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <p>Your Phone number</p>
                        <input type="tel" className="input-field" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                    </div>
                    <div className="input-box">
                        <p>Select Course</p>
                        <select name="select-course" className="input-field" value={course} onChange={e => setCourse(e.target.value)}>
                            <option value="nda">NDA exam</option>
                            <option value="cds">CDS exam</option>
                            <option value="cds-ota">CDS OTA exam</option>
                            <option value="afcat">AFCAT exam</option>
                        </select>
                    </div>
                    <input type="submit" value="Book Now" className="btn-a-solid" />
                </form>
            </div>
            <div className="free-form-section-right">
                <img src={contactImg} alt="" className="gif" />
            </div>
        </div>
    );
}
