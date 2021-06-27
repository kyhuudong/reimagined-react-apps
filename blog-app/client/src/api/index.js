import axios from "axios";

export const fetchPosts = () => axios.get(`/posts`);

export const createPost = (payload) => axios.post(`/posts`, payload);

export const updatePost = (payload) => axios.put("/posts/update", payload);

export const deletePost = (payload) => {
  console.log(payload);
  axios.delete(`/posts/delete`, { data: payload });
};
