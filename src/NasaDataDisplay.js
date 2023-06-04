import React from 'react';
import NasaImageList from './NasaImageList';

const NasaDataDisplay = ({ loading, images, searchTerm, handleSearch }) => {
  return (
    
    <div className="container" style={{maxWidth: "1400px"}}>
        <div className='mt-2 mb-2 rounded d-flex justify-content-between' style={{backgroundImage: 'url(https://img.freepik.com/fotos-gratis/nuvem-branca-no-ceu-azul_74190-2381.jpg?w=2000)'}}>
            <h1 style={{color: "white", padding: "5px"}}>Nasa Images API</h1>
            <img src='https://logospng.org/download/nasa/logo-nasa-256.png' alt="NASA Logo" style={{ width: "70px" }}/>
        </div>
        <div>
            <input type="text" value={searchTerm} onChange={handleSearch} placeholder="Digite o que quer procurar!" className="form-control rounded shadow" />
            {loading ? <p>Loading...</p> : <NasaImageList images={images} />}
        </div>
    </div>
  );
};

export default NasaDataDisplay;
