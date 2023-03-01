import axios from "axios";

export function postUser(u) {
  return axios.post('https://localhost:7003/api/User', u);
}
