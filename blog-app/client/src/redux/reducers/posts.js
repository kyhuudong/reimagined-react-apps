import { INIT_STATE } from "../../constants";
import { createPost, deletePost, getPosts, getType } from "../actions";

export default function postsReducers(state = INIT_STATE.posts, action) {
  switch (action.type) {
    case getType(getPosts.getPostsRequest):
      return {
        ...state,
        isLoading: true,
      };
    case getType(getPosts.getPostsSuccess()):
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case getType(getPosts.getPostsFailure()):
      return {
        ...state,
        isLoading: false,
      };
    case getType(createPost.createPostSuccess()):
      console.log(action.payload.post);
      return {
        ...state,
        data: [...state.data, action.payload.post],
      };
    // case getType(deletePost.deletePostSuccess()):
    //   return state.data.filter((post) => post._id !== action.payload._id);

    default:
      return state;
  }
}
