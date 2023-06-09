import React, { useEffect, useState } from 'react';
import NasaDataDisplay from './NasaDataDisplay';
import axios from 'axios';

const NasaData = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      if (searchTerm === '') {
        setImages([{
          links: [{ href: 'https://designculture.com.br/wp-content/uploads/2018/01/nasa-logo-60-anos.png' }],
          data: [{ title: 'Imagem Padrão' }] 
        }]);
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get(`https://images-api.nasa.gov/search?q=${searchTerm}&media_type=image`);
        const responseData = response.data.collection.items;
        setImages(responseData);
        setLoading(false);
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <NasaDataDisplay loading={loading} images={images} searchTerm={searchTerm} handleSearch={handleSearch} />
    </div>
  );
};

export default NasaData;

