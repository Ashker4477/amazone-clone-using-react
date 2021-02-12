import { axios } from "axios";

const instance = axios.create({
  //the api (cloud function) URL
  baseURl: "http://localhost:5001/e-clone-a1269/us-central1/api",
});
export default instance; 