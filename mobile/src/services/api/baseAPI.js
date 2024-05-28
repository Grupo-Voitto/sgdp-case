import axios from 'axios';

const localhostBaseURL = 'http://192.168.18.96:3333';

export const baseAPI = axios.create({
  baseURL: localhostBaseURL,
});
