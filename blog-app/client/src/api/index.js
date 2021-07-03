import axios from "axios";

const ENDPOINT = "https://dongky-blog-app.herokuapp.com";

export const fetchPosts = async () => await axios.get(`${ENDPOINT}/posts`);

export const createPost = async (payload) =>
  await axios.post(`${ENDPOINT}/posts`, payload);

export const updatePost = async (payload) =>
  await axios.put(`${ENDPOINT}/posts`, payload);

export const deletePost = async (payload) => {
  console.log(payload);
  const response = axios.delete(`${ENDPOINT}/posts`, { data: payload });
  return response;
};
