import axios from "axios";

const axiosInstanse = axios.create({
  baseURL: "https://be-wld2.onrender.com/",
  withCredentials: true,
});

export default axiosInstanse;
