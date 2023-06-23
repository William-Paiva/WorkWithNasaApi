import React from 'react';
import { Link } from 'react-router-dom';
import NasaImageList from './NasaImageList';

const NasaDataDisplay = ({ loading, images, searchTerm, handleSearch }) => {
  return (
    <div className="container" style={{ maxWidth: "1400px" }}>
      <div className='mt-2 mb-2 rounded d-flex justify-content-between' style={{ backgroundImage: 'url(https://j.gifs.com/j2VzyP.gif)' }}>
        <h1 style={{ color: "white", padding: "5px" }}>Nasa Images Search Engine - API</h1>
        <img src='https://logospng.org/download/nasa/logo-nasa-256.png' alt="NASA Logo" style={{ width: "70px" }} />
      </div>
      <div className="d-flex ">
        <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search for an Image Here and Click on the Ones You Want to Save..." className="form-control rounded shadow mr-2" />
        <Link to="/saved-images" className="btn btn-primary">
          Galery
        </Link>
      </div>
      {loading ? <p>Loading...</p> : <NasaImageList images={images} />}
    </div>
  );
};

export default NasaDataDisplay;

