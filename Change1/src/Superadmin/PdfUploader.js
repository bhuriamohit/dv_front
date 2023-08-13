import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import React, { useState } from 'react';
import './VideoUploader.css';

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

const PdfUploader = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    uploadFiles();
  };

  const uploadFiles = () => {
    console.log('Uploading files...');
    console.log('Course Name:', courseName);
    console.log('Number of Lectures:', numOfLectures);
    console.log('Lecture Descriptions:', lectureDescriptions);
    console.log('Lecture Files:', lectureFiles);

    for (let i = 0; i < numOfLectures; i++) {
      const file = lectureFiles[i];
      const description = lectureDescriptions[i];

      if (file && description) {
        uploadFile(file, description, i + 1);
      }
    }
  };

  const uploadFile = (file, description, index) => {
    const storageRef = ref(storage, `StudyMaterial/${courseName}/Lecture${index}.pdf`);

    try {
      setUploadProgress(0);
      setUploadError(null);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
          setUploadProgress(progress);
        },
        (error) => {
          setUploadError(error.message);
        },
        async () => {
          console.log('File uploaded successfully!');
          setUploadProgress(100);
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          setDownloadURL(url);
        }
      );
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadError(error.message);
    }
  };

  return (
    <form className="course-form" onSubmit={handleSubmit}>
      <label className="form-label" htmlFor="courseName">
        Enter Course Name:
      </label>
      <input id="courseName" type="text" value={courseName} onChange={handleCourseNameChange} required />

      <br />

      <label className="form-label" htmlFor="numOfLectures">
        Enter Number of Lectures:
      </label>
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
                accept="application/pdf"
                onChange={(e) => handleFileChange(e, index)}
                required
              />
            </div>
          ))}
        </>
      )}

      <br />

      {numOfLectures > 0 && (
        <>
          <button type="submit" className="submit-button">
            Submit
          </button>
          {uploadProgress > 0 && <p>Upload progress: {uploadProgress}%</p>}
        </>
      )}
    </form>
  );
};

export default PdfUploader;
