import axios from "axios";

export const api = axios.create({
  baseURL:"https://backend-movienotes.onrender.com"
});
