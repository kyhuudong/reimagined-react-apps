import { combineReducers } from "redux";
import modalReducers from "./modal";
import postsReducers from "./posts";
const rootReducer = combineReducers({
  posts: postsReducers,
  modal: modalReducers,
});

export default rootReducer;
