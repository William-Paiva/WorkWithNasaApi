import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NasaData from './NasaData';
import SavedImagesPage from './SavedImagesPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NasaData />} />
        <Route path="/saved-images" element={<SavedImagesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
