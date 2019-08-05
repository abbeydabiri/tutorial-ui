import axios from "axios";

export const HTTP = axios.create({
  baseURL: ``,
  baseURL: `http://localhost:5353`,
  headers: {
    Authorization: "Bearer {token}"
  }
});
