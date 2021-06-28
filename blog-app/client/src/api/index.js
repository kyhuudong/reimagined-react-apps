import axios from "axios";

export const fetchPosts = () => axios.get(`/posts`);

export const createPost = (payload) => axios.post(`/posts`, payload);

export const updatePost = (payload) => axios.put("/posts", payload);

export const deletePost = (payload) => {
  console.log(payload);
  return axios.delete(`/posts`, { data: payload });
};
