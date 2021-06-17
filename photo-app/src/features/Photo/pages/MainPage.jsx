import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Container } from "reactstrap";
import Banner from "../../../common/Banner";
import PhotoList from "../components/PhotoList";
import { deletePhoto } from "../photoSlice";

const MainPage = () => {
  const photos = useSelector((state) => state.photos);
  const dispatch = useDispatch();
  const history = useHistory();

  const onEditPhoto = (photo) => {
    console.log("Edit: ", photo);
    const editUrl = `/photos/${photo.id}`;
    history.push(editUrl);
  };

  const onDeletePhoto = (photo) => {
    console.log("Delete: ", photo);
    const deleteAction = deletePhoto(photo.id);
    dispatch(deleteAction);
  };

  return (
    <div className="photo-main">
      <Banner
        title="Your awesome photos :D"
        backgroundUrl="https://scx1.b-cdn.net/csz/news/800a/2019/2-nature.jpg
    "
      />
      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add New Photos</Link>
        </div>
        <PhotoList
          photos={photos}
          onEditPhoto={onEditPhoto}
          onDeletePhoto={onDeletePhoto}
        />
      </Container>
    </div>
  );
};

export default MainPage;
