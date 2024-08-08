import axios from "axios";

const key = "f013b89a651d4a6d9f7775d73ff06f30";
const axiosCreate = axios.create({
  baseURL: "https://api.rawg.io/api/",
});

const getGenreList = axiosCreate.get("/genres?key=" + key);
export default {
  getGenreList,
};
