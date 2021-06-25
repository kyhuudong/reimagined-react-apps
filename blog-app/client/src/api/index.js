import axios from "axios";

export const fetchPosts = () => axios.get(`/posts`);

export const createPost = (payload) => axios.post(`/posts`, payload);

export const deletePost = (payload) => axios.delete(`/posts`, payload);
