import React from 'react';
import NasaImageList from './NasaImageList';


const NasaDataDisplay = ({ loading, images, searchTerm, handleSearch }) => {
  return (
    <div className="container" style={{maxWidth: "1400px"}}>
        <div className='mt-2 mb-2 rounded d-flex justify-content-between' style={{backgroundImage: 'url(https://j.gifs.com/j2VzyP.gif)'}}>
            <h1 style={{color: "white", padding: "5px"}}>Nasa Images Search Engine - API</h1>
            <img src='https://logospng.org/download/nasa/logo-nasa-256.png' alt="NASA Logo" style={{ width: "70px" }}/>
        </div>
        <div>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Search for a Image Here ..." className="form-control rounded shadow" />
            {loading ? <p>Loading...</p> : <NasaImageList images={images} />}
        </div>
    </div>
  );
};

export default NasaDataDisplay;
