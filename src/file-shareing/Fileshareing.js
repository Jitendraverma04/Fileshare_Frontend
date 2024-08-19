import { useState, useEffect, useRef } from 'react';
 import './Filesharing.css';
import Background from '../Images/Background.jpg'
import { uploadFile } from './Api';

import React from 'react'

export default function Fileshareing() {

  
  const [file, setFile] = useState('');
  const [result, setResult] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        const response = await uploadFile(data);
        setResult(response.path);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div>
      <div className='container'>
      <img src={Background} className='img' alt="background" />
      <div className='wrapper'>
        <h1>Simple file sharing!</h1>
        <p>Upload and share the download link.</p>
        
        <button onClick={() => onUploadClick()}>Upload</button>
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
<br/>
<br/>
      </div>
      <div className="result">
        Your link will be generated here<br/><br/>
      <a href={result} target='_blank' rel="noreferrer">{result}</a> 
      </div>
         </div>
    </div>
  )
};
