import { Modal } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { modalState$ } from "../../redux/selectors";

const CreatePostModel = () => {
  const { isShow } = useSelector(modalState$);

  console.log({ isShow });

  return (
    <Modal open={isShow}>
      <h1>this is body</h1>
    </Modal>
  );
};

export default CreatePostModel;
