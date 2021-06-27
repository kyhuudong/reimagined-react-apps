import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
  try {
    const posts = yield call(api.fetchPosts);
    console.log("Posts: ", posts.data.posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data.posts));
  } catch (err) {
    console.error(err);
    yield put(actions.getPosts.getPostsFailure(err));
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload);
    console.log("CREATE - POST: ", post.data);
    yield put(actions.createPost.createPostSuccess(post.data));
  } catch (err) {
    console.error(err);
    yield put(actions.createPost.createPostFailure(err));
  }
}

function* updatePostSaga(action) {
  try {
    const post = yield call(api.updatePost, action.payload);
    console.log("UPDATE - POST: ", post.data);
    yield put(actions.updatePost.updatePostSuccess(post.data));
  } catch (err) {
    console.error(err);
    yield put(actions.updatePost.updatePostFailure(err));
  }
}

function* deletePostSaga(action) {
  try {
    console.log("_id: ", action.payload);
    const post = yield call(api.deletePost, action.payload);
    console.log("Post - Delete: ", post);
    yield put(actions.deletePost.deletePostSuccess(post));
  } catch (err) {
    console.error(err);
    yield put(actions.deletePost.deletePostFailure(err));
  }
}

function* mySaga() {
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
  yield takeLatest(actions.deletePost.deletePostRequest, deletePostSaga);
}

export default mySaga;
