import React, { useState } from 'react';
import axios from 'axios';

export default function Circulars() {
  const [file, setFile] = useState(null);
  const [fileType, setFileType] = useState('image');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState('others');
  const [text, setText] = useState('');
  const [uploadS, setUploadS] = useState(false);
  const [endDate, setEndDate] = useState("");
  const [heading, setHeading] = useState("");
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [number, setNumber] = useState("");
  

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleTypeChange = (e) => {
    setFileType(e.target.value);
  };

  const uploadFile = async () => {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', fileType === 'image' ? 'images_preset' : 'videos_preset');

    try {
      let cloudName = process.env.CLOUD_NAME;
      let resourceType = fileType === 'image' ? 'image' : 'video';
      let api = `https://api.cloudinary.com/v1_1/dewyxcn9b/${resourceType}/upload`;

      const res = await axios.post(api, data);
      const { secure_url } = res.data;
      console.log('Uploaded URL:', secure_url);
      axios.post('https://college-web-platform-backend-code.onrender.com/vignan/upload', { category, text, secure_url, fileType, endDate, heading, name, mail, number })
      setError(null);
      setUploadS(true);
    } catch (error) {
      console.log(error);
      setUploadS(false);
      setError('Failed to upload file. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setUploadS(false);
    uploadFile().finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className='form-main'>
      <form onSubmit={handleSubmit}>
        <h3>Others Data:</h3>
        <label>Enter name:</label>
        <input 
         className='yas'
         type='textarea'
         onChange={(e)=>setName(e.target.value)}
         value={name}
        
        />
        <br />
        <label>Enter mail:</label>
        <input 
         className='yas'
         type='textarea'
         onChange={(e)=>setMail(e.target.value)}
         value={mail}
        
        />
        <br />
        <label>Enter phone number:</label>
        <input 
         className='yas'
         type='textarea'
         onChange={(e)=>setNumber(e.target.value)}
         value={number}
        
        />
        <br />
        <label>Select file type:</label>
        <select value={fileType} onChange={handleTypeChange}>
          <option value="image">Image</option>
          <option value="video">Video</option>
        </select>
        <br />
        <label>Select end date:</label>
        <input 
         className='endDate'
         type='date'
         onChange={(e)=>setEndDate(e.target.value)}
         value={endDate}
        
        />
        <br />
        <label>Enter the Main Heading:(regarding the upload, should be less than 8 words)</label>
        <input 
         className='yas'
         type='textarea'
         onChange={(e)=>setHeading(e.target.value)}
         value={heading}
        
        />
        <br />
        <label>Enter the text:(regarding the upload, should be less than 90 words)</label>
        <input
          className='yas'
          type='textarea'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <label>Choose file:</label>
        <input type="file" onChange={handleFileChange} />
        <br />
        <button type="submit" disabled={!file || loading}>
          Upload
        </button>
      </form>
      {loading && <p>Uploading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {uploadS && <p style={{ color: 'green' }}>Upload Successful</p>}
    </div>
  );
}