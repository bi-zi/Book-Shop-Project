import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_CUSTOM_ENV_VAR,
});


export default instance;
