import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import React, { useState } from 'react';
import './CourseForm.css';
// Initialize Firebase app
const firebaseConfig = {
    apiKey: "AIzaSyB0fzJAibu_1LU4HQwlE1dBKP5_ghxbBE0",
    authDomain: "defencevidhya.firebaseapp.com",
    projectId: "defencevidhya",
    storageBucket: "defencevidhya.appspot.com",
    messagingSenderId: "432765101100",
    appId: "1:432765101100:web:362b213e759e7e442b9d89",
    measurementId: "G-7KC7F8XXDH"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

// const VideoUploader = () => {
//   const [selectedFile, setSelectedFile] = useState(null);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };



//   return (
//     <div>
//       <h2>File Uploader</h2>
//       <div>
//         <input type="file" onChange={handleFileChange} />
//         <button onClick={handleUpload}>Upload</button>
//       </div>
//       {selectedFile && <p>Selected file: {selectedFile.name}</p>}
//       {uploadProgress > 0 && <p>Upload progress: {uploadProgress}%</p>}
//       {uploadError && <p>Error: {uploadError}</p>}
//       {downloadURL && (
//         <div>
//           <p>Download URL:</p>
//           <a href={downloadURL} target="_blank" rel="noopener noreferrer">
//             {downloadURL}
//           </a>
//         </div>
//       )}
//     </div>
//   );
// };

// export default VideoUploader;




const CourseForm = () => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [uploadError, setUploadError] = useState(null);
  const [downloadURL, setDownloadURL] = useState(null);
  const [courseName, setCourseName] = useState('');
  const [numOfLectures, setNumOfLectures] = useState(0);
  const [lectureDescriptions, setLectureDescriptions] = useState([]);
  const [lectureFiles, setLectureFiles] = useState([]);

  const handleCourseNameChange = (e) => {
    setCourseName(e.target.value);
  };

  const handleNumOfLecturesChange = (e) => {
    const count = parseInt(e.target.value);
    setNumOfLectures(count);
    setLectureDescriptions(Array.from({ length: count }, (_, index) => ''));
    setLectureFiles(Array.from({ length: count }, () => null));
  };

  const handleDescriptionChange = (e, index) => {
    const descriptions = [...lectureDescriptions];
    descriptions[index] = e.target.value;
    setLectureDescriptions(descriptions);
  };

  const handleFileChange = (e, index) => {
    const files = [...lectureFiles];
    files[index] = e.target.files[0];
    setLectureFiles(files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let coursedata = {
      heading: courseName,
      description:courseDescription,
      about:aboutCourse,
      price:coursePrice,


    }
    await fetch('http://localhost:8080/addcourses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(coursedata)
    })
    uploadVideo();
  };
  const Uploadavideo = async (selectedFile, data, index) => {
    if (selectedFile) {
      const storageRef = ref(storage, 'Lectures/' + data.topic + "/" + "Lecture" + index + '.mp4');

      try {
        setUploadProgress(0);
        setUploadError(null);

        const uploadTask = uploadBytesResumable(storageRef, selectedFile);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress = Math.round(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
            setUploadProgress(progress);
          },
          (error) => {
            setUploadError(error.message);
          },
          async () => {
            console.log('Video uploaded successfully!');
            setUploadProgress(100);
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            setDownloadURL(url);
          }
        );
      } catch (error) {
        console.error('Error uploading video:', error);
        setUploadError(error.message);
      }
    }
  };
  const uploadVideo = async () => {
    // Implementation of the upload video function
    console.log('Uploading video...');
    console.log('Course Name:', courseName);
    console.log('Number of Lectures:', numOfLectures);
    console.log('Lecture Descriptions:', lectureDescriptions);
    console.log('Lecture Files:', lectureFiles);
    let formData = {
      number: numOfLectures,
      topic: courseName,
      Description: lectureDescriptions
    }
    fetch('https://betawill-com.onrender.com/uploadlectures', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(async (response) => {
        let fres = await response.json();
        console.log(fres)
      })
    for (let i = 0; i < formData.number; i++) {
      Uploadavideo(lectureFiles[i], formData, i + 1);
    }





  };

  const handleGoButtonClick = () => {
    setLectureDescriptions(Array.from({ length: numOfLectures }, (_, index) => ''));
    setLectureFiles(Array.from({ length: numOfLectures }, () => null));
  };


  const [courseDescription, setCourseDescription] = useState("");
  const [aboutCourse, setAboutCourse] = useState("");
  const [coursePrice, setCoursePrice] = useState("");

  const handleCourseDescriptionChange = (e) => {
    setCourseDescription(e.target.value);
  };

  const handleAboutCourseChange = (e) => {
    setAboutCourse(e.target.value);
  };

  const handleCoursePriceChange = (e) => {
    setCoursePrice(e.target.value);
  };


  return (
    <form className="course-form" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="courseName">Enter Course Name:</label>
      <input
        id="courseName"
        type="text"
        value={courseName}
        onChange={handleCourseNameChange}
        required
      />

      <br />
      <label className="form-label" htmlFor="courseDescription">Enter Course Description:</label>
      <input
        id="courseDescription"
        type="text"
        value={courseDescription}
        onChange={handleCourseDescriptionChange}
        required
      />

      <br />

      {/* New about course field */}
      <label className="form-label" htmlFor="aboutCourse">About Course:</label>
      <textarea
        id="aboutCourse"
        value={aboutCourse}
        onChange={handleAboutCourseChange}
        required
      ></textarea>

      <br />

      {/* New course price field */}
      <label className="form-label" htmlFor="coursePrice">Course Price:</label>
      <input
        id="coursePrice"
        type="number"
        min="0"
        value={coursePrice}
        onChange={handleCoursePriceChange}
        required
      />

      <br />


      <label className="form-label" htmlFor="numOfLectures">Enter Number of Lectures:</label>
      <input
        id="numOfLectures"
        type="number"
        min="0"
        value={numOfLectures}
        onChange={handleNumOfLecturesChange}
        required
      />

      <br />

      {numOfLectures > 0 && (
        <>
          <h3 className="form-heading">Lecture Descriptions:</h3>
          {Array.from({ length: numOfLectures }, (_, index) => (
            <div className="lecture-description" key={`description-${index + 1}`}>
              <label className="form-label" htmlFor={`description${index + 1}`}>
                Description {index + 1}:
              </label>
              <input
                id={`description${index + 1}`}
                type="text"
                value={lectureDescriptions[index]}
                onChange={(e) => handleDescriptionChange(e, index)}
                required
              />
              <input
                className="file-input"
                type="file"
                accept="video/*"
                onChange={(e) => handleFileChange(e, index)}
                required
              />
            </div>
          ))}
        </>
      )}


      <br />

      {numOfLectures > 0 && (
        <button type="submit" className="submit-button">
          Submit
        </button>

      )}
      {uploadProgress > 0 && <p>Upload progress: {uploadProgress}%</p>}
    </form>
  );
};

export default CourseForm;


