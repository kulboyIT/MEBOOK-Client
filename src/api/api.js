import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:4040/api",
  baseURL: "https://mebook-server.herokuapp.com",
  
  withCredentials: true,
});
