import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:8000",
});

export const sendContactMessage = async (data) => {
  const res = await API.post("/api/contact", data);
  return res.data;
};
