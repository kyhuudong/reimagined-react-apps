import React, { useCallback, useState } from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import EditIcon from "@material-ui/icons/Edit";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions";
import useStyle from "./styles";
import CreatePostModel from "../CreatePostModel";

export default function Post({ post }) {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const classes = useStyle();

  const onDeleteCard = useCallback(
    (id) => {
      dispatch(deletePost.deletePostRequest({ _id: id }));
    },
    [dispatch]
  );

  return (
    <>
      <Card>
        <CardHeader
          avatar={<Avatar>A</Avatar>}
          title={post.author}
          subheader={moment(post.updatedAt).format("HH:MM MM DD, YYYY")}
          action={
            <CardActions>
              <IconButton>
                <EditIcon onClick={() => setIsOpen(true)} />
              </IconButton>
              <IconButton>
                <HighlightOffIcon onClick={() => onDeleteCard(post._id)} />
              </IconButton>
            </CardActions>
          }
        />
        <CardMedia
          image={post.attachment}
          title="Title"
          className={classes.media}
        />
        <CardContent>
          <Typography variant="h5" color="textPrimary">
            {post.title}
          </Typography>
          <Typography variant="body2" component="p" color="textSecondary">
            {post.content}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton>
            <FavoriteIcon />
            <Typography component="span" color="textSecondary">
              {post.likeCount}
            </Typography>
          </IconButton>
        </CardActions>
      </Card>

      <CreatePostModel
        isOpen={isOpen}
        post={post}
        setIsOpen={setIsOpen}
        editMode="Editing your card"
      />
    </>
  );
}
