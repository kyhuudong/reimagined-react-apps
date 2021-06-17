import React from 'react';
import { Button } from "reactstrap";
import "./styles.scss";

function getRandomImageUrl() {
  let number = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${number}/300/300`;
}

const RandomPhoto = ({
  name,
  imageUrl,
  onImageUrlChange,
  onRandomButtonBlur
}) => {
  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };
  return (
    <div className="random-photo">
      <div className="random-photo__button">
        <Button
          outline
          name={name}
          color="primary"
          onBlur={onRandomButtonBlur}
          onClick={handleRandomPhotoClick}
        >
          Random a photo
        </Button>
      </div>
      <div className="random-photo__photo">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Oops not found try again !"
            onError={handleRandomPhotoClick}
          />
        )}
      </div>
    </div>
  );
};

export default RandomPhoto;
