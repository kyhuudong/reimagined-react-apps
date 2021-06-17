import React from 'react';
import { Col, Row } from "reactstrap";
import PhotoCard from "./PhotoCard";

const PhotoList = ({ photos, onEditPhoto, onDeletePhoto }) => {
  return (
    <Row>
      {photos.map((photo) => (
        <Col key={photo.title} xs="12" md="6" lg="3">
          <PhotoCard
            photo={photo}
            onEditPhoto={onEditPhoto}
            onDeletePhoto={onDeletePhoto}
          />
        </Col>
      ))}
    </Row>
  );
};

export default PhotoList;
