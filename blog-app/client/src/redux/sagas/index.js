import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    console.log("Posts: ", posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    console.log("Post - CREATE: ", post);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.createPostFailure(err));
  }
}

function* deletePostSaga(action) {
  try {
    console.log("aaaaaaaaaaaL: ", action);
    const post = yield call(api.deletePost, action.payload);
    console.log("Post - Delete: ", post);
    yield put(actions.createPost.deletePostSuccess(post.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.deletePostFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
}

export default mySaga;
