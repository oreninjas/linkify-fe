import axios from "axios";

const axiosInstanse = axios.create({
  // baseURL: "https://be-wld2.onrender.com/", // till project ends.
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});

export default axiosInstanse;
