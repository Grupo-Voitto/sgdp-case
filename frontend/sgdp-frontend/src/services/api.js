import axios from "axios";

const local = axios.create({
  baseURL: "http://localhost:3333/",
});
export {
  local,
};
