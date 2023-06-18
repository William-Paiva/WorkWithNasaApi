import React from 'react';
import axios from 'axios';

const NasaImageList = ({ images }) => {
  const handleClickImage = async (imageUrl) => {
    try {
      const response = await axios.post('http://localhost:3001/images', { imageUrl });
      console.log('Imagem salva:', response.data);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } catch (error) {
      console.log('Erro ao salvar imagem:', error);
    }
  };

  return (
    <div className="container" style={{ maxWidth: "1400px" }}>
      {images.map((image, index) => (
        image.links && image.links[0] && image.data && image.data[0] ? (
          <div key={index} className='d-block mb-5 d-flex justify-content-center align-items-center rounded' style={{ maxWidth: "1400px", padding: "10px" }}>
            <a href={image.links[0].href} target="_blank" rel="noopener noreferrer" onClick={() => handleClickImage(image.links[0].href)}>
              <img src={image.links[0].href} alt={image.data[0].title} style={{ borderRadius: "5%", border: "3px solid purple" }} />
            </a>
          </div>
        ) : null
      ))}
      <div style={{ position: 'fixed', bottom: '20px', left: '20px', zIndex: 9999, backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '10px', borderRadius: '5px' }}>
        <img src='https://cdn.icon-icons.com/icons2/93/PNG/256/arrow_up_16741.png' alt="NASA Logo" style={{ width: "30px" }} onClick={() => handleClickImage('https://cdn.icon-icons.com/icons2/93/PNG/256/arrow_up_16741.png')} />
      </div>
    </div>
  );
};

export default NasaImageList;
