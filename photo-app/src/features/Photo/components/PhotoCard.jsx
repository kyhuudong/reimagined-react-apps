import React from 'react';
import { Button } from "reactstrap";
import "./photocard.scss";

const PhotoCard = ({ photo, onEditPhoto, onDeletePhoto }) => {
  const handleEditPhoto = () => {
    if (onEditPhoto) onEditPhoto(photo);
  };

  const handleDeletePhoto = () => {
    if (onDeletePhoto) onDeletePhoto(photo);
  };

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleEditPhoto}>
              Edit
            </Button>
          </div>
          <div>
            <Button outline size="sm" color="light" onClick={handleDeletePhoto}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCard;
