import React from 'react';
import Banner from "common/Banner";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import PhotoForm from "../components/PhotoForm";
import { addPhoto, updatePhoto } from "../photoSlice";
import "./addedit.scss";
export const randomNumber = (min, max) => {
  return min + Math.trunc(Math.random() * (max - min));
};
const AddEditPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { photoId } = useParams();
  const photoState = useSelector((state) => state.photos);
  const editedPhoto = photoState.find((x) => x.id === +photoId);
  const isAddMode = !photoId;
  console.log({ photoState, editedPhoto });

  const initialValues = isAddMode
    ? {
      title: "",
      categoryId: null,
      photo: ""
    }
    : editedPhoto;

  const handleAddPhoto = (values) => {
    console.log("Values ne : ", values);
    return new Promise((resolve) => {
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: randomNumber(10000, 99999)
          };

          const action = addPhoto(newPhoto);
          dispatch(action);
        } else {
          const editAction = updatePhoto(values);
          dispatch(editAction);
        }
        history.push("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner
        title="Pick your amazing photo :D"
        backgroundUrl="https://greenangletv.com/wp-content/uploads/2020/11/wed-blog-shutterstock_1703194387_low_nwm.jpg"
      />

      <div className="photo-edit__form">
        <PhotoForm
          onSubmit={handleAddPhoto}
          initialValues={initialValues}
          isAddMode={isAddMode}
        />
      </div>
    </div>
  );
};

export default AddEditPage;
