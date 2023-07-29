import React from "react";
import "../css/Footer.css";
import whiteLogo from "../brochure/back.png";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import AdbIcon from '@mui/icons-material/Adb';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export default function Footer() {
const Disclaimer = () =>(
<div>

      <h2>Disclaimer:</h2>
      <p>
        YOU AGREE THAT THE PLATFORM, CONTENT, AND ALL MATERIALS ARE PROVIDED ON AN “AS IS” AND “AS AVAILABLE” BASIS AND YOUR USE OF THE PLATFORM SHALL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, DEFENCE VIDYA, ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS DISCLAIM AND EXCLUDE ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE PLATFORM AND YOUR USE THEREOF. TO THE FULLEST EXTENT PERMITTED BY LAW, DEFENCE VIDYA EXCLUDES ALL WARRANTIES, CONDITIONS, TERMS OR REPRESENTATIONS ABOUT THE ACCURACY, SECURITY, RELIABILITY, QUALITY, AVAILABILITY OR COMPLETENESS OF THE PLATFORM, USER-GENERATED CONTENT ON THE PLATFORM, OR THE CONTENT OF ANY SITES SO LINKED AND ASSUMES NO LIABILITY OR RESPONSIBILITY FOR ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF USER-GENERATED CONTENT OR ANY CONTENT ON THE PLATFORM, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE PLATFORM, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE PLATFORM, (IV) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE PLATFORM BY ANY THIRD PARTY, AND/OR (V) ANY ERRORS OR OMISSIONS IN ANY USER-GENERATED CONTENT OR ANY OTHER CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY USER- GENERATED CONTENT OR ANY OTHER CONTENT THAT IS POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE PLATFORM AS DEFENCE VIDYA IS STRICTLY AN INTERMEDIARY AS UNDER THE INFORMATION TECHNOLOGY ACT, 2000. DEFENCE VIDYA DOES NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY USER- GENERATED CONTENT OR THE PLATFORM ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE PLATFORM OR ANY HYPERLINKED SERVICES OR FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND DEFENCE VIDYA WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF USER-GENERATED CONTENT OR SERVICES. AS WITH THE PURCHASE OF A SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
      </p>

      <h2>OWNERSHIP OF RIGHTS</h2>
      <p>
        All rights, including copyright, in this Website/Application are owned by or licensed to us. Any use of this Website/Application or its contents, including copying or storing it or them in whole or part, other than for your own personal, non-commercial use is prohibited without our permission. You are prohibited from modifying, copying, distributing, transmitting, displaying, printing, publishing, selling, licensing, creating derivative works or using any content available on or through our Website/Application for commercial or public purposes. You may not modify, distribute or re-post something on this Website/Application for any purpose. You acknowledge that you do not acquire any ownership rights by downloading copyrighted material. Trademarks that are located within or on our Website/Application or a Website/Application otherwise owned or operated in conjunction with Defence Vidya shall not be deemed to be in the public domain but rather the exclusive property of Defence Vidya, unless such site is under license from the trademark owner thereof in which case such license is for the exclusive benefit and use of Defence Vidya, unless otherwise stated.
      </p>

      <h2>PRIVACY POLICY FOR COOKIES AND IP TRACKING</h2>
      <p>
        Our website also stocks data apart from the contents that give information on personal identity in the form of IP & Cookies. Non-personal identifiable data is the one that is categorized under this including queries submitted, date & time, response to advertisements, search history, educational interests, domains etc. We also use a conversion pixel to track the behaviour of viewers on our lead collection form because it is a very important section of our business.
      </p>

      <h2>Right To Modify Terms</h2>
      <p>
        When you visit DEFENCE VIDYA or send us e-mails, you are communicating with us through electronic media. You consent to receive communications from us electronically. We will communicate with you by e-mails or chats or pop-ups, by posting notices anywhere on website DEFENCE VIDYA. You agree that all agreements, notices, disclosures and other communications that we provide to you electronically satisfy any legal requirement that such communications be in writing. You agree to provide us with your current and active email address.
        If you do not accept the changes, your sole and exclusive remedy is to discontinue using the website. DEFENCE VIDYA reserves the right at any time and from time to time to modify or discontinue, temporarily or permanently, the Service (or any part thereof) or prices with or without notice. You agree that DEFENCE VIDYA shall not be liable to you or to any third party for any modification, suspension or discontinuance of the Service.
        We may change these terms and conditions, and you are responsible for regularly reviewing and complying with them. Your continued use of this website constitutes your agreement to all those terms and conditions.
      </p>

</div>
);

  const DefenceVidyaPlatform = () => (
    <div>
      <h2>DEFENCE VIDYA Platform</h2>
      <ol>
        <li>
          These Terms and Conditions apply to all Users of the Defence Vidya Platform.
          The Defence Vidya Platform includes all aspects of the Website and Apps which includes but is not limited to products, software, and service offered via the Defence Vidya Platform, such as the Defence Vidya website and Defence Vidya app, and any other service or application that Defence Vidya introduces from time to time.
        </li>
        <li>
          Defence Vidya Platform is an online platform that provides educational videos/or tutorials, by the Defence Vidya faculties of the Defence Vidya Platform and acts as an intermediary between the educator and the faculty.
          Content uploaded through the use of the Defence Vidya Platform shall hereinafter be referred to as “DEFENCE VIDYA Content”.
          You agree and acknowledge that DEFENCE VIDYA has complete control over and assumes responsibility for, the DEFENCE VIDYA Content.
        </li>
        <li>
          Subject to these Terms and Conditions, Privacy Policy, and all other rules and policies made available or published elsewhere, DEFENCE VIDYA hereby grants you a non-exclusive, non-transferable, non-sublicensable, limited license to use the DEFENCE VIDYA Platform in accordance with these Terms and Conditions.
        </li>
        <li>
          You agree and acknowledge that DEFENCE VIDYA shall have the right at any time to change or discontinue any aspect or feature of the DEFENCE VIDYA Platform, including, but not limited to, the DEFENCE VIDYA Content, hours of availability, and equipment needed for access or use. Further, DEFENCE VIDYA may discontinue disseminating any portion of information or category of information that may change or eliminate any transmission method and may change transmission speeds or other signal characteristics. DEFENCE VIDYA reserves the right to refuse access to the DEFENCE VIDYA Platform, terminate Accounts, remove or edit contents without any notice to You.
        </li>
      </ol>
    </div>
  );
  
  const DataAndInformation = () => (
    <div>
      <h2>DATA AND INFORMATION POSSESSED BY THE WEBSITE</h2>
      <p>
        Our website also collects and stocks the data that is submitted by the users.
        The contact form for the collection of data on DEFENCE VIDYA is generated in a quite simple way for presentation of data by collecting users’ interests, educational qualification and age limits.
        The viewers agree to the terms of conditions by creating a user account on our website.
        Through login/signup we can make use of the collected data from our channel in order to analyze the new trends.
        The users also agree to get SMS or Emails including the information about the courses and entrance examinations to apply for or applied.
        Talking about “Testimonials”, the users provide a testimonial that is allowed to public display.
        The posted views and comments are completely the property of DEFENCE VIDYA as it offers vital insight into the thought process of the visitors.
      </p>
    </div>
  );
  
  const ContentAndLicense = () => (
    <div>
      <h2>Content And License</h2>
      <p>
        All content on the website and available through the Service, including but not limited to designs, text, graphics, pictures, video, information, applications, software, sound and other files, and their selection and arrangement (the “website Content”), is the property of DEFENCE VIDYA, its users or its licensors, with all rights reserved.
        No website Content may be modified, copied, distributed, framed, reproduced, republished, downloaded, displayed, posted, transmitted, or sold in any form or by any means, in whole or in part, without DEFENCE VIDYA prior written permission, except that (i) the foregoing does not apply to your own User Content (as defined below) that you legally post on the website, and (ii) any website Content provided by Third Parties for sale or license through the website (“Third Party Content”) is subject to the terms and conditions established by those Third Parties from time to time, as described on the website (“Third Party License Terms”).
        Provided that you are eligible for use of the website, you are granted, solely for your personal, non-commercial use, a limited license to access and use, and to download or print a copy of, any portion of the website Content, other than Third Party Content, to which you have properly gained access, provided that you keep all copyright or other proprietary notices intact. Such license is subject to these Terms of Use and does not include use of any data mining, robots or similar data gathering or extraction methods.
        Your rights to use Third Party Content are as described in the applicable Third Party License Terms. Any use of the website or the website content other than as specifically authorized herein, without the prior written permission of DEFENCE VIDYA the applicable Third Party, as the case may be, is strictly prohibited and will terminate the license granted herein. Such unauthorized use may also violate applicable laws including without limitation copyright and trademark laws. Unless explicitly stated herein, nothing in these Terms of Use shall be construed as conferring any license to intellectual property rights, whether by estoppel, implication or otherwise. This license is revocable at any time without notice and with or without cause.
      </p>
    </div>
  );
  
  const ThirdPartyPermission = () => (
    <div>
      <h2>Third Party Permission</h2>
      <p>
        The significance of these paragraphs - “Utilization of the website and Security” described above in the agreement are for the advantages of DEFENCE VIDYA and also for its directors, employees, teaching staff members, agents, faculties, licensors, suppliers, and any third party information provider to the service.
        All these individuals are permitted to claim those provisions directly against the user on its own behalf.
      </p>
    </div>
  );
  
  const GeneralProvisions = () => (
    <div>
      <h2>General Provisions:</h2>
      <ol>
        <li>
          Legal Notices: In the event of any other disputes or claims arising from the use of the DEFENCE VIDYA Platform, please get in touch with us at defencevidya07@gmail.com
        </li>
        <li>
          Modification, Amendment or Termination: DEFENCE VIDYA may, in its sole discretion, modify or revise the Agreement and policies at any time, and you agree to be bound by such modifications or revisions. Your continued use of the Platform post any modification of the Agreement shall be taken as your consent and acceptance to such modifications. Nothing in the Agreement shall be deemed to confer any third-party rights or benefits. You are advised to check our Platform frequently to see recent changes and to keep yourself updated with the most recent updates.
        </li>
        <li>
          Force Majeure: DEFENCE VIDYA shall not be liable for failure to perform, or the delay in performance of, any of its obligations if, and to the extent that, such failure or delay is caused by events substantially beyond its control, including but not limited to acts of God, acts of the public enemy or governmental body in its sovereign or contractual capacity, war, terrorism, floods, fire, strikes, epidemics, civil unrest or riots, power outage, and/or unusually severe weather.
        </li>
        <li>
          Miscellaneous: If any part of the Agreement is found to be unlawful, void or unenforceable, that part of the Agreement will be deemed severable and will not affect the validity and enforceability of any remaining provisions. We do not guarantee continuous, uninterrupted or secure access to the Platform, and operation of the Platform may be interfered by numerous factors outside our control. Headings are for reference purpose only and in no way define, limit, construe or describe the scope or extent of such section. Our failure to act with respect to any breach by you or others does not waive our right to act with respect to subsequent or similar breaches.
        </li>
      </ol>
    </div>
  );
  
  const IndemnityAndRelease = () => (
    <div>
      <h2>Indemnity And Release</h2>
      <p>
        You agree to indemnify and hold harmless the DEFENCE VIDYA Parties from any liability, cost, expense, loss, claim or demand, (collectively, “Losses”) including reasonable lawyers’ fees, made by any third party due to or arising out of your User Content, your use of the Service, your breach of this Agreement or the documents it incorporates by reference, or your violation of any law or the rights of a third party in connection with the website or the Service.
        You agree to release the DEFENCE VIDYA Parties from any claims, demands, and damages (actual and consequential) of every kind and nature, known and unknown, suspected and unsuspected, disclosed and undisclosed, arising out of or in any way connected with any dispute you have with one or more of our users or any Third Party providing goods and services through the Service.
      </p>
    </div>
  );
  
  
  
  
  


  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-column first-column">
          <img src={whiteLogo} alt="" />
          <h5>Service Before Self</h5>
        </div>
        <div className="footer-column second-column">
          <h4>Quick Contacts</h4>
          <div className="contact-field">
            <div className="contact-field-icon">
              <AddIcCallIcon />
            </div>
            <div className="contact-field-text">
              <h6>Call Us</h6>
              <p>+91 7452967095</p>
            </div>
          </div>
          <div className="contact-field">
            <div className="contact-field-icon">
              <AddIcCallIcon />
            </div>
            <div className="contact-field-text">
              <h6>WhatsApp Us</h6>
              <p>+91 7452967095</p>
            </div>
          </div>
          <div className="contact-field">
            <div className="contact-field-icon">
              <AddIcCallIcon />
            </div>
            <div className="contact-field-text">
              <h6>Email Us</h6>
              <p>defencevidya07@gmail.com</p>
            </div>
          </div>
        </div>
        <div className="footer-column third-column">
          <h4>Office Address</h4>
          <p>
            Tapovan road nanoorkhera near ncc headquarters Dehradun 248001
          </p>
        </div>
        <div className="footer-column forth-column">
          <h4>Social Links</h4>
          <div className="social-media-links">
            <a href="https://instagram.com/defence__vidya?igshid=MjEwN2IyYWYwYw==" aria-label="instagram icon"><InstagramIcon className="social-media-icon" /></a>
            <a href="https://www.facebook.com/profile.php?id=100093575812495&mibextid=LQQJ4d" aria-label="facebook icon"><FacebookIcon className="social-media-icon" /></a>
            <a href="https://www.linkedin.com/in/defence-vidya-764967285" aria-label="linkedin icon"><LinkedInIcon className="social-media-icon" /></a>
            <a href="https://twitter.com/defence_vidya?s=11" aria-label="twitter icon"><TwitterIcon className="social-media-icon" /></a>
          </div>
          <h4>Download APP</h4>
          <div className="download-field">
            <a href="#" aria-label="Android Download"><AppleIcon className="download-app-icon" /></a>
            <a href="#" aria-label="Apple Download"><AdbIcon className="download-app-icon" /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
      <div className="home-faq-section">
         
          <details className="faq-question-box">
                <summary className="faq-question">TERMS AND CONDITIONS</summary>
                <div className="terms">
                 
                  
                  
              
                <Disclaimer />
    {/* <OwnershipOfRights /> */}
    {/* <PrivacyPolicy /> */}
    {/* <RightToModifyTerms /> */}
    <DefenceVidyaPlatform />
    <DataAndInformation />
    <ContentAndLicense />
    <ThirdPartyPermission />
    <GeneralProvisions />
    <IndemnityAndRelease />
                  
                  </div>
                
            </details>

            <details className="faq-question-box">
                <summary className="faq-question">REFUND AND POLICIES</summary>
                <div className="terms">


                <h2>FEES TERMS AND CONDITIONS</h2>
        <ol>
          <li>
            We have tried to give all the relevant information on our website about the services we will deliver. No claim can be made on the grounds that a service was not provided, a service which we have not mentioned on our website.
          </li>
          <li>
            Fees once submitted will not be refunded in any circumstances.
          </li>
          <li>
            Fees that are to be submitted in instalments should be submitted on time, late submissions may invite penalties.
          </li>
          <li>
            Failure to pay fees may lead to expulsion.
          </li>
          <li>
            We are not responsible for any glitch during online transactions.
          </li>
          <li>
            In case of any medical emergency, the Institute will pay only the consultation fees. Rest of the charges will have to be paid by guardians.
          </li>
          <li>
            For any minor treatment, the academy will bear all charges.
          </li>
        </ol>
        <p className="note">
          Note: The decision of what is minor and what is not rests with the academy.
        </p>
                </div>
            </details>
          
        </div>
        <p>Copyright Reserved By Defence Vidya</p>
      </div>
    
    </div>
  );
}
