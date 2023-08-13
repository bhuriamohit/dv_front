import React, { useContext, useEffect, useRef, useState } from "react";
import "../css/AdminVideoCard.css";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { AuthContext } from "./AuthContext";
import {
  ref,
  uploadBytes,
  getDownloadURL
} from "firebase/storage";
import { storage } from "./firebase";
import { v4 } from "uuid";

export default function AdminVideoCard(props) {
  const { token } = useContext(AuthContext);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [showEditConfirmation, setShowEditConfirmation] = useState(false);
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [editId, seteditId] = useState(null);
  const fileInputRef = useRef(null);
  const [imageUpload, setImageUpload] = useState(null);
  const [imageUrls, setImageUrls] = useState("");
  const [uploading, setUploading] = useState(true);

  const openDeleteBox = (id) => {
    setDeleteId(id);
    setShowDeleteConfirmation(true);
  };

  const closeDeleteBox = () => {
    setShowDeleteConfirmation(false);
  };
  const closeVideoEditForm = () => {
    setShowEditConfirmation(false)
  }

  const openVideoEditForm = (id) => {
    console.log("openVideoEditForm", id)
    seteditId(id)
    setShowEditConfirmation(true)
  }

  useEffect(() => {

  })



  const handleThumbnailChange = async (e) => {
    setImageUpload(e.target.files[0]);
  };
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };
  const handleDescriptionChange = async (e) => {
    setDescription(e.target.value);
  };
  const handleSubmit = async (e, id) => {
    e.preventDefault();
    var myHeaders = new Headers();
    myHeaders.append("Authorization", `token ${token.token}`);

    var formdata = new FormData();
    formdata.append("file", imageUpload);
    formdata.append("title", title);
    formdata.append("description", description);

    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: formdata,
      redirect: 'follow'
    };
    fetch(`https://smiling-blue-hosiery.cyclic.app/api/admin/updatecourse?id=${id}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          console.log("Video Update successfully");
          props.setfetchagain(!props.fetchagain)
        } else {
          console.error("Failed to Update video");
        }
      })
      .catch((error) => {
        console.error("An error occurred while deleting the video", error);
      });

    setThumbnail(null);
    setTitle('');
    setDescription('');
    closeVideoEditForm();
    setImageUpload("")
    setShowEditConfirmation(false)
  };


  async function DeleteFunc(id) {

    console.log(id, "deleteFunction", deleteId)
    fetch(`https://smiling-blue-hosiery.cyclic.app/api/admin/deletecourse?id=${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `bearer ${token.token}`
      }
    })
      .then((response) => {
        if (response.ok) {
          // Handle successful delete
          console.log("Video deleted successfully");
          props.setfetchagain(!props.fetchagain)
        } else {
          // Handle delete error
          console.error("Failed to delete video");
        }
      })
      .catch((error) => {
        console.error("An error occurred while deleting the video", error);
      });

  }

  return (
    <div className="admin-video-card">
      <a href={props.video_url} target="_blank">
        <img src={props.thumbnail} alt={"admin-video-card"} />
      </a>

      <h4>{props.title}</h4>
      <h5>{props.description}</h5>
      <div className="admin-video-card-btns">
        <button className="edit-btn" onClick={() => openVideoEditForm(props._id)}>Edit</button>
        <button className="dlt-btn" onClick={() => openDeleteBox((props._id))}>
          Delete
        </button>
      </div>


      {
        showDeleteConfirmation && (
          <div className="edit-screen" style={{ display: "flex" }}>
            <div className="delete-box" id="deleteBox" style={{ display: "flex" }} >
              <HighlightOffIcon className="close-icon" onClick={closeDeleteBox} />
              <h4>Do you Really Want To Delete This Video?</h4>
              <div className="delete-button-box">
                <button className="dlt-btn" onClick={() => DeleteFunc(deleteId)}>
                  Yes
                </button>
                <button className="edit-btn" onClick={closeDeleteBox}>
                  No
                </button>
              </div>
            </div>
          </div>

        )
      }
      {
        showEditConfirmation && (
          <div className="edit-screen" id="editVideoScreen" style={{ display: "flex" }}>
            <form onSubmit={(e) => handleSubmit(e, editId)} className="edit-video-form">
              <HighlightOffIcon className="close-icon" onClick={closeVideoEditForm} />
              <div className="edit-video-form-header">
                <h4>Edit Video Details</h4>
                <hr />
              </div>
              <div className="update-thumbnail">
                <p>New Thumbnail</p>
                <input type="file" name="file"
                  p={1.5}

                  onChange={handleThumbnailChange} />
              </div>
              <div className="input-box">
                <p>New Title</p>
                <input
                  type="text"
                  className="input-field"
                  onChange={handleTitleChange}
                />
              </div>
              <div className="input-box">
                <p>New Description</p>
                <textarea
                  rows={2}
                  className="input-field"
                  value={description}
                  onChange={handleDescriptionChange}
                />
              </div>
              <button>
                Save Changes
              </button>

            </form>

          </div>
        )
      }

    </div>
  );
}
