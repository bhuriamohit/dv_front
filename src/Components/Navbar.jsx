import React, { useState, useEffect, useContext } from "react";
import "../css/Navbar.css";
import blacklogo from "../Images/blacklogo.png";
import { AuthContext } from "./AuthContext";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';
import whatsapp from "../Images/whatsapp.png"
import callIcon from "../Images/phone.png"
import Superadmin from '../Superadmin/SuperAdmin'

export default function Navbar() {
  const navigate = useNavigate();


  
  const [showBlock, setShowBlock] = useState(false);
  const [showInquiry, setShowInquiry] = useState(false);
  const [superadmin,setsuperadmin]=useState(false)
  const[ThankYou,setThankYou]=useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowInquiry(true);
   
    }, 160000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  const closeInquiryForm = () => {
    setShowInquiry(false)
  }
  const closeThankYou=()=>{
    setThankYou(false)
  }
  const closeLoginForm = () => {
    document.getElementById("loginFormSection").style.display = "none";
  };
  const openLoginForm = () => {
    document.getElementById("loginFormSection").style.display = "flex";
  };
  const closeRegisterForm = () => {
    setShowBlock(false);
  };
  const openRegisterForm = () => {
    setShowBlock(true);
  };

  const closeLogout = () => {
    document.getElementById("logoutScreen").style.display = "none";
  };
  const openLogout = () => {
    document.getElementById("logoutScreen").style.display = "flex";
  };
  const closeResponsiveMenu = () => {
    document.getElementById("responsiveMenu").style.top = "-80vh"
  }
  const openResponsiveMenu = () => {
    document.getElementById("responsiveMenu").style.top = "0vh"
  }

  const { isAuthenticated, login, logout, clearAuthToken, setAuthToken } =
    useContext(AuthContext);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [classValue, setClassValue] = useState("");
  const [stream, setStream] = useState("");
  const [state, setState] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [logpassword, setlogPassword] = useState("");
  const [course, setCourse] = useState('');

  const handleCourseChange = (event) => {
    setCourse(event.target.value);
  };

  console.log(isAuthenticated);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleContactNumberChange = (e) => {
    setContactNumber(e.target.value);
  };

  // const handleCourseChange = (e) => {
  //   setClassValue(e.target.value);
  // };

  const handleStreamChange = (e) => {
    setStream(e.target.value);
  };
  const handleLogout = () => {
    logout();
    clearAuthToken();
    closeLogout();
    navigate("/");
  };

  const handleStateChange = (e) => {
    setState(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Create a payload object with the form data
    const payload = {
      fullname: fullName,
      email: email,
      password: password,
      contactnumber: contactNumber,
      classstandard: classValue,
      stream: stream,
      state: state,
      course: course
    };

    fetch(`https://smiling-blue-hosiery.cyclic.app/api/auth/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Registration successfully");
        
          alert("Registered Successfully!")
        } else {
          console.error("Failed to Registration");
          alert("Failed to Registration");
        }
      })
      .catch((error) => {
        console.error("An error occurred while deleting the video", error);
      });
    // Reset the form fields
    setFullName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setContactNumber("");
    setClassValue("");
    setStream("");
    setCourse("")
    setState("");
  };

  const handleEmailOrPhoneChange = (e) => {
    setEmailOrPhone(e.target.value);
  };

  const handleLogPasswordChange = (e) => {
    setlogPassword(e.target.value);
  };

  const handlelogSubmit = async (e) => {

    if(emailOrPhone=="defence@gmail.com" && logpassword=="1234")
    {
        setsuperadmin(true)
        return ;
    }
    e.preventDefault();
    const payload = {
      email: emailOrPhone,
      password: logpassword,
    };
    try {
      const response = await fetch("https://smiling-blue-hosiery.cyclic.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const data = await response.json();
        login();
        setAuthToken(data);
        console.log("Login successful", data);
      } else {
        console.error("Failed to login");
      }
    } catch (error) {
      console.error("An error occurred while logging in", error);
    }
    // Reset the form fields
    setEmailOrPhone("");
    setlogPassword("");
    closeLoginForm();
  };

  const [name, setName] = useState('');
  const [emailfree, setEmailfree] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [coursefree, setCoursefree] = useState('');
const openInquiry =()=>{
  setShowInquiry(true);
}
  const handleSubmitfree = async (e) => {
    e.preventDefault();

    const formData = {
      name:name,
      email: emailfree,
      phone:phoneNumber,
      course: coursefree
    };

    console.log("Formdata yahin se a rha hai")

    let response = await fetch('https://betawill-com.onrender.com/bookcounselling/defencevidya', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    response=await response.json();

    alert(response.status)

      
    setShowInquiry(false)
setThankYou(true)
    setName("")
    setEmailfree("")
    setPhoneNumber("")
    setCoursefree("")
  };

  if(superadmin==false)
  {

    return (
      <div className="navbar">
        <div className="fixed-whatsapp">

<button className="btn-a-solid" onClick={openInquiry}>JOIN NOW!</button>
</div>
<div className="left-fixed">
<div className="small-icon">
  <a href=" https://wa.me/7452967095">
    <img src={whatsapp} alt="" />
  </a>
</div>
<div className="small-icon small-icon-call">
  <a href="tel:7452967095">
    <img src={callIcon} alt="" />
  </a>
</div>
</div>
  
        <img src={blacklogo} alt="" className="navbar-logo" />
  
        <div className="navbar-items">
          <Link to="/" className="nav-item">
            Home
          </Link>
          <Link to="course" className="nav-item">
            Lecture
          </Link>
          <Link to="study-material" className="nav-item">
            Study Material
          </Link>
          <Link to="test-series" className="nav-item">
            Test Series
          </Link>
          <div className="nav-item course-nav">
            Course 🔻
            <div className="drop-down-home-course">
              <Link to="/nda-course" className="nav-item">NDA Course</Link>
              <Link to="/cds-course" className="nav-item">CDS Course</Link>
              <Link to="/cds-ota-course" className="nav-item">CDS OTA Course</Link>
              <Link to="/afcat-course" className="nav-item">AFCAT Course</Link>
            </div>
          </div>
          <Link to="about" className="nav-item">
            About Us
          </Link>
          <Link to="contact" className="nav-item">
            Contact Us
          </Link>
        </div>
  
  
        {!isAuthenticated ? (
          <div className="navbar-buttons">
            {" "}
            <div className="btn-a-outline" onClick={openRegisterForm}>
              Register
            </div>{" "}
            <div className="btn-a-solid" onClick={openLoginForm}>
              Login
            </div>{" "}
          </div>
        ) : (
          <div className="btn-a-solid" onClick={openLogout}>
            Logout
          </div>
        )}
        <MenuIcon className="menu-icon" onClick={openResponsiveMenu} />
  
        <div className="login-form-section" id="loginFormSection">
          <form onSubmit={handlelogSubmit} className="login-form">
            <HighlightOffIcon className="close-icon" onClick={closeLoginForm} />
            <h3>Login</h3>
            <div className="input-box">
              <p>Enter E-mail or Phone No.</p>
              <input
                type="email"
                className="input-field"
                value={emailOrPhone}
                onChange={handleEmailOrPhoneChange}
              />
            </div>
            <div className="input-box">
              <p>Enter Password</p>
              <input
                type="password"
                className="input-field"
                value={logpassword}
                onChange={handleLogPasswordChange}
              />
            </div>
            <input type="submit" value="Login" className="btn-a-solid" />
          </form>
        </div>
        {showBlock && (
          <div className="register-form-section" id="registerFormSection">
            <form onSubmit={handleSubmit} className="register-form">
              <HighlightOffIcon
                className="close-icon-2"
                onClick={closeRegisterForm}
              />
              <h3>
                Register <span>Yourself</span> Now!
              </h3>
              <div className="input-row">
                <div className="input-box">
                  <p>Full Name</p>
                  <input
                    type="text"
                    className="input-field"
                    value={fullName}
                    onChange={handleFullNameChange}
                  />
                </div>
                <div className="input-box">
                  <p>Email</p>
                  <input
                    type="email"
                    className="input-field"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-box">
                  <p>Password</p>
                  <input
                    type="password"
                    className="input-field"
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                <div className="input-box">
                  <p>Confirm Password</p>
                  <input
                    type="password"
                    className="input-field"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                  />
                </div>
              </div>
              <div className="input-row">
                <div className="input-box">
                  <p>Contact Number</p>
                  <input
                    type="number"
                    className="input-field"
                    value={contactNumber}
                    onChange={handleContactNumberChange}
                  />
                </div>
                {/* <div className="input-box">
                  <p>Class</p>
                  <input
                    type="number"
                    className="input-field"
                    value={classValue}
                    onChange={handleClassChange}
                  />
                </div> */}
                <div className="input-box">
                  <p>Course</p>
                  <select
                    name="course"
                    className="input-field"
                    value={course}
                    onChange={handleCourseChange}
                  >
                    <option value="NDA">NDA</option>
                    <option value="CDS">CDS</option>
                    <option value="CDS OTA">CDS OTA</option>
                    <option value="AFCAT">AFCAT</option>
                  </select>
                </div>
              </div>
              {/* <div className="input-row">
                <div className="input-box">
                  <p>Stream</p>
                  <input
                    type="text"
                    className="input-field"
                    value={stream}
                    onChange={handleStreamChange}
                  />
                </div>
                <div className="input-box">
                  <p>State</p>
                  <input
                    type="text"
                    className="input-field"
                    value={state}
                    onChange={handleStateChange}
                  />
                </div>
              </div> */}
              <div className="register-btn-section">
                <button type="submit" className="btn-a-solid">
                  Register
                </button>
              </div>
            </form>
          </div>
        )}
        <div className="logout-screen" id="logoutScreen">
          <div className="logout-box">
            <HighlightOffIcon className="close-icon" onClick={closeLogout} />
            <h4>Do you Want To Logout?</h4>
            <button className="btn-a-solid" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>
        {ThankYou && (<div className="navbar-inquiry-section" id="navbarInquirySection">
          <form action="#" className="free-form" id="navbarInquiryForm" onSubmit={handleSubmitfree}>
          <HighlightOffIcon className="close-icon" onClick={closeThankYou} />
          <div className="Thankyou">
      THANK YOU!
    </div>
    <button className="btn-a-outline">Download Brochure!</button>
          </form>
        </div>
        )}
  
  
        {showInquiry && (<div className="navbar-inquiry-section" id="navbarInquirySection">
          <form action="#" className="free-form" id="navbarInquiryForm" onSubmit={handleSubmitfree}>
            <HighlightOffIcon className="close-icon" onClick={closeInquiryForm} />
            <h4>Book Free Counselling</h4>
            <div className="input-box">
              <p>Your Name</p>
              <input type="text" className="input-field" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div className="input-box">
              <p>Your Email</p>
              <input type="email" className="input-field" value={emailfree} onChange={e => setEmailfree(e.target.value)} />
            </div>
            <div className="input-box">
              <p>Your Phone number</p>
              <input type="tel" className="input-field" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
            </div>
            <div className="input-box">
              <p>Select Course</p>
              <select name="select-course" className="input-field" value={coursefree} onChange={e => setCoursefree(e.target.value)}>
                <option value="nda">NDA exam</option>
                <option value="cds">CDS exam</option>
                <option value="cds-ota">CDS OTA exam</option>
                <option value="afcat">AFCAT exam</option>
              </select>
            </div>
            <input type="submit" value="Book Now" className="btn-a-solid" />
          </form>
        </div>
        )}


  
  
        <div className="responsive-menu" id="responsiveMenu">
  
          <CloseIcon className="menu-close-icon" onClick={closeResponsiveMenu} />
  
          <img src={blacklogo} alt="" className="navbar-logo" />
  
          <div className="responsive-navbar-items">
            <Link to="/" className="responsive-nav-item" onClick={closeResponsiveMenu}>
              Home
            </Link>
            <Link to="course" className="responsive-nav-item" onClick={closeResponsiveMenu}>
              Lectures
            </Link>
            <Link to="study-material" className="responsive-nav-item" onClick={closeResponsiveMenu}>
              Study Material
            </Link>
            <div className="responsive-course-nav">
              Course🔻
              <div className="responsive-drop-down-course">
                <li><Link to="/nda-course" className="responsive-nav-item" onClick={closeResponsiveMenu}>NDA Course</Link></li>
                <li><Link to="/cds-course" className="responsive-nav-item">CDS Course</Link></li>
                <li><Link to="/cds-ota-course" className="responsive-nav-item" onClick={closeResponsiveMenu}>CDS OTA Course</Link></li>
                <li><Link to="/afcat-course" className="responsive-nav-item" onClick={closeResponsiveMenu}>AFCAT Course</Link></li>
              </div>
            </div>
            <Link to="test-series" className="responsive-nav-item" onClick={closeResponsiveMenu}>
              Test Series
            </Link>
            <Link to="about" className="responsive-nav-item" onClick={closeResponsiveMenu}>
              About Us
            </Link>
            <Link to="contact" className="responsive-nav-item" onClick={closeResponsiveMenu}>
              Contact Us
            </Link>
          </div>
  
  
          {!isAuthenticated ? (
            <div className="responsive-navbar-buttons" onClick={closeResponsiveMenu}>
              {" "}
              <div className="btn-a-outline" onClick={openRegisterForm}>
                Register
              </div>{" "}
              <div className="btn-a-solid" onClick={openLoginForm}>
                Login
              </div>{" "}
            </div>
          ) : (
            <div className="btn-a-solid" onClick={openLogout}>
              Logout
            </div>
          )}








        </div>
      </div>
    );  
  }
  else
  {
    return(
      <div>
        <Superadmin/>
      </div>
    )
  }
}
