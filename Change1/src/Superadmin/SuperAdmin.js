import React, { useState } from "react";
import CourseForm from "./CourseForm";
import TestUploadForm from "./TestUploader";
import PdfUploader from "./PdfUploader";
import './Superadmin.css'
const Superadmin=()=>
{
    const [pagestatus,setpagestatus]=useState(null)
    return(
        <div className="uploadsection">
            <h2 className="superadminheading">SuperAdmin.........</h2>
            <button className="uploadlecture" onClick={()=>setpagestatus("lectures")}>Upload Lectures</button>
            {/* <button onClick={()=>setpagestatus("tests")}>Upload Tests</button> */}
            <button className="uploadlecture" onClick={()=>setpagestatus("studymaterial")}>Upload Study Material</button>
            {pagestatus=="lectures" && <CourseForm/>}
            {/* {pagestatus=="tests" && <TestUploadForm/>} */}
            {pagestatus=="studymaterial" && <PdfUploader/>}
        </div>
    )
}

export default Superadmin;