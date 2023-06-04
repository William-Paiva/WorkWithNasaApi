import React from 'react';

const NasaImageList = ({ images }) => {
  return (
    <div className="container" style={{maxWidth: "1400px"}}>
      {images.map((image, index) => (
        image.links && image.links[0] && image.data && image.data[0] ? (
          <div key={index} className='d-block mb-5 d-flex justify-content-center align-items-center rounded' style={{maxWidth: "1200px", padding:"10px"}}>
            <img src={image.links[0].href} alt={image.data[0].title} style={{borderRadius: "5%", border: "3px solid purple"}}/>
          </div>
        ) : null
      ))}
    </div>
  );
};

export default NasaImageList;


