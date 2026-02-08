import axios from "axios";

const API = axios.create({
  baseURL: "https://finance-backend-p4nq.onrender.com",
});

export const sendContactMessage = async (data) => {
  const res = await API.post("/api/contact", data);
  return res.data;
};
