import axios from "axios";

export const fetchPosts = async () => await axios.get(`/posts`);

export const createPost = async (payload) =>
  await axios.post(`/posts`, payload);

export const updatePost = async (payload) => await axios.put("/posts", payload);

export const deletePost = async (payload) => {
  console.log(payload);
  const response = axios.delete(`/posts`, { data: payload });
  return response;
};
