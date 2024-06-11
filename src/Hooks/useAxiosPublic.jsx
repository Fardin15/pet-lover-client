import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://pet-lover-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
