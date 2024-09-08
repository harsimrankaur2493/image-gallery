import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {
  // Close modal when clicking on the backdrop
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null); // Close the modal
    }
  };

  return (
    <>
      {selectedImg && ( // Conditional rendering: only render if selectedImg is truthy
        <div className="backdrop" onClick={handleClick}>
          <img src={selectedImg} alt="enlarged pic" className="backdrop-img" />
        </div>
      )}
    </>
  );
};

export default Modal;
