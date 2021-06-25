import React, { useCallback } from "react";
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
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import moment from "moment";
import { useDispatch } from "react-redux";
import { deletePost } from "../../redux/actions";

export default function Post({ post }) {
  const dispatch = useDispatch();

  const onDelete = useCallback(
    (id) => {
      dispatch(deletePost.deletePostRequest(id));
    },
    [dispatch]
  );

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>A</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format("HH:MM MM DD, YYYY")}
        action={
          <IconButton>
            <MoreVertIcon onClick={() => onDelete(post._id)} />
          </IconButton>
        }
      />
      <CardMedia image="" title="Title" />
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
  );
}
