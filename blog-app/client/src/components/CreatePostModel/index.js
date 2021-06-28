import { Button, Modal, TextareaAutosize, TextField } from "@material-ui/core";
import React, { useCallback, useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { modalState$ } from "../../redux/selectors";
import useStyles from "./styles";
import { hideModal, createPost, updatePost } from "../../redux/actions";

const CreatePostModel = ({ isOpen, post, setIsOpen, editMode }) => {
  const [data, setData] = useState({
    title: post?.title || "",
    content: post?.content || "",
    attachment: post?.attachment || "",
  });

  const { isShow } = useSelector(modalState$);
  const classes = useStyles();
  const dispatch = useDispatch();

  const onClose = useCallback(() => {
    dispatch(hideModal());
    setData({ title: "", content: "", attachment: "" });
  }, [dispatch]);

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onSubmit = useCallback(() => {
    dispatch(createPost.createPostRequest(data));
    onClose();
  }, [data, dispatch, onClose]);

  const onEdit = useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({
        _id: post?._id,
        title: data.title,
        content: data.content,
        attachment: data.attachment,
      })
    );
    onClose();
  }, [data, dispatch, onClose]);

  return (
    <Modal
      open={isOpen ? isOpen : isShow}
      onClose={setIsOpen ? () => setIsOpen(false) : onClose}
    >
      <div className={classes.paper} id="simple-modal-title">
        <h2>{editMode || "Create New Post"}</h2>
        <form noValidate autoComplete="off" className={classes.form}>
          <TextField
            className={classes.title}
            required
            label="Title"
            value={data.title}
            name="title"
            onChange={(e) => onChange(e)}
          />
          <TextareaAutosize
            className={classes.textarea}
            rowsMin={10}
            rowsMax={15}
            placeholder="Content..."
            value={data.content}
            name="content"
            onChange={(e) => onChange(e)}
          />
          <FileBase64
            accept="image/*"
            multiple={false}
            type="file"
            value={data.attachment}
            onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
          />
          <div className={classes.footer}>
            <Button
              variant="contained"
              color="primary"
              component="span"
              fullWidth
              onClick={editMode ? onEdit : onSubmit}
            >
              {editMode ? "Edit" : "Create"}
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default CreatePostModel;
