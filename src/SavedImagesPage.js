import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SavedImagesPage = () => {
  const [savedImages, setSavedImages] = useState([]);

  useEffect(() => {
    const fetchSavedImages = async () => {
      try {
        const response = await axios.get('http://localhost:3001/images');
        setSavedImages(response.data);
      } catch (error) {
        console.log('Error fetching saved images:', error);
      }
    };

    fetchSavedImages();
  }, []);

  return (
    <div>
      <h1 style={{ color: "white", padding: "5px" }}>Saved Images</h1>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
      {savedImages.map((image, index) => (
        <div key={index} className='d-block mb-5 d-flex justify-content-center align-items-center rounded'>
          <img src={image.imageUrl} alt={`Saved Image ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default SavedImagesPage;
