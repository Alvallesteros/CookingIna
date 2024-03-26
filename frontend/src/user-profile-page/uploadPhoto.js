import React, { useState } from 'react';
import './uploadPhoto.css'; // Import CSS file for modal styles

const UploadPhoto = ({ updatePic, setUpdatePic, handleUpload }) => {
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
  const handleSubmit = () => {
    // Pass the selected file to the parent component for handling
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
