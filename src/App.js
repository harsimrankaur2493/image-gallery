import React, { useState } from 'react';
import Title from './comps/Title';
import UploadForm from './comps/uploadForm';
import ImageGrid from './comps/imageGrid';
import Modal from './comps/Modal';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      {/* Pass setSelectedImg here as well */}
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
    </div>
  );
}

export default App;

