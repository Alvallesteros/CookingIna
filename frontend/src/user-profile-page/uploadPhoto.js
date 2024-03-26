import React, { useState } from 'react';
import './uploadPhoto.css'; // Import CSS file for modal styles

const UploadPhoto = ({ updatePic, setUpdatePic, handleUpload, username }) => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);

    const handleFileChange = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
  
      // Display image preview
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setImagePreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setImagePreview(null);
      }
    };
  const handleSubmit = async () => {
    try {
        if (!selectedFile) {
          console.error('No file selected.');
          return;
        }
  
        // Create FormData object
        const formData = new FormData();
        formData.append('profile_picture', selectedFile);
  
        // Make PUT request to the backend
        const response = await fetch(`http://localhost:8000/api/profile/${username}/update`, {
          method: 'PUT',
          body: formData,
        });
  
        if (response.ok) {
          console.log('Profile picture updated successfully.');
          // Close the modal
          setUpdatePic(false);
          // Reload profile data
          handleUpload(selectedFile);
        } else {
          console.error('Failed to update profile picture:', response.statusText);
        }
      } catch (error) {
        console.error('Error while updating profile picture:', error);
      }
    handleUpload(selectedFile);
    // Close the modal
    setUpdatePic(false);
  };

  return (
    <div className={updatePic ? "modal display-block" : "modal display-none"}>
      <section className="modal-main">
        <h2>Change Profile Picture</h2>
        {imagePreview && <img src={imagePreview} alt="Preview" className="image-preview" />}
        <label htmlFor="fileInput" className="custom-file-button">Upload File Here</label>
        <input type="file" id="fileInput" onChange={handleFileChange}/>
        <div className='button' onClick={handleSubmit}>Upload</div>
        <div className='button' onClick={() => setUpdatePic(false)}>Close</div>
      </section>
    </div>
  );
};

export default UploadPhoto;
