import React, { useState, useEffect } from 'react'
import "../css/ContactPage.css"
import PlaceIcon from '@mui/icons-material/Place';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import { Helmet } from 'react-helmet';
export default function ContactPage() {

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, []);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [query, setQuery] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleQueryChange = (e) => {
        setQuery(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            name: name,
            email: email,
            querydetails: query,
        };

        fetch(`https://smiling-blue-hosiery.cyclic.app/api/auth/feedback`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        })
            .then((response) => {
                if (response.ok) {
                    console.log("successfully");
                } else {
                    console.error("Failed to upload video");
                }
            })
            .catch((error) => {
                console.error("An error occurred while deleting the video", error);
            });
        // Reset the form fields
        setName("");
        setEmail("");
        setQuery("");
    };
    return (
        <div className='contact-page'>
            <Helmet>
                <meta charset="UTF-8" />
                <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
                <meta name="robots" content="index, follow" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Contact Us</title>
                <meta
                    name="description"
                    content="Your Organization provides online education for NDA and CDS exams. Prepare for the exams with our comprehensive courses and expert instructors."
                />
            </Helmet>
            <div className="contact-page-top">
                <h3>Contact Us</h3>
                <p>Get in touch it us in just simple steps. you can contact us through your mail or you can just fill your query in the contact for or you can also directly contact us through whatsapp</p>
            </div>
            <div className="contact-page-bottom">
                <div className="bottom-left">
                    <div className="contact-field">
                        <div className="contact-field-circle"><PlaceIcon className='contact-icon' /></div>
                        <div className="contact-field-text">
                            <h4>Visit Us</h4>
                            <p>Tapovan road nanoorkhera near ncc headquarters Dehradun 248001</p>
                        </div>
                    </div>
                    <div className="contact-field">
                        <div className="contact-field-circle"><CallIcon className='contact-icon' /></div>
                        <div className="contact-field-text">
                            <h4>Call Us</h4>
                            <p>+91 7452967095</p>
                        </div>
                    </div>
                    <div className="contact-field">
                        <div className="contact-field-circle"><EmailIcon className='contact-icon' /></div>
                        <div className="contact-field-text">
                            <h4>Mail Us</h4>
                            <p>defencevidya07@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="bottom-right">
                    <form onSubmit={handleSubmit} className="form">
                        <h4>Send Messsage</h4>
                        <div className="input-box">
                            <p>Your Name</p>
                            <input
                                type="text"
                                name="name"
                                className="input-field"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>
                        <div className="input-box">
                            <p>Your Email</p>
                            <input
                                type="email"
                                name="email"
                                className="input-field"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className="input-box">
                            <p>Your Query</p>
                            <input
                                type="text"
                                name="query"
                                className="input-field"
                                value={query}
                                onChange={handleQueryChange}
                            />
                        </div>
                        <input type="submit" className="btn-a-solid" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    )
}
