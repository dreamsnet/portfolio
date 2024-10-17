import React, { useState } from "react";
import { motion } from "framer-motion";
import Popup from "reactjs-popup";
import "./popup.css"; // Importation du fichier CSS

const Movie = ({ movie }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState("");

  const openPopup = (imageUrl) => {
    setSelectedImage(imageUrl);
    setPopupOpen(true);
  };

  const closePopup = () => {
    setSelectedImage("");
    setPopupOpen(false);
  };

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <img
        src={movie.poster_path} 
        alt={movie.title}
        onClick={() => openPopup(movie.poster_path)}
        style={{ cursor: "pointer" }}
      />
      <h3>{movie.title}</h3>
      
      <Popup
        open={popupOpen}
        onClose={closePopup}
        modal
        nested
        closeOnDocumentClick
        contentStyle={{ content: "popup-content" }}
        overlayStyle={{ overlay: "popup-overlay" }}
      >
        {(close) => (
          <>
            <button 
              className="close-button" 
              onClick={close}
            >
              &times;
            </button>
            <motion.img
              src={selectedImage}
              alt={movie.title}
              className="popup-img"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
            />
          </>
        )}
      </Popup>
    </motion.div>
  );
};

export default Movie;
