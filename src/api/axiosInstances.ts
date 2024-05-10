import Cookies from 'js-cookie';
import axios from 'axios';

// const baseUrl = 'https://venda-w56v.onrender.com/v1';
const baseUrl = 'https://localvenda-c5e66dcf9521.herokuapp.com/v1';

const baseAPI = axios.create({ baseURL: baseUrl });

baseAPI.interceptors.request.use(async (config) => {
  const userToken = Cookies.get('userToken');
  // If userToken exists, set 'Authorization' and 'x-access-token' headers to the user token
  if (userToken) {
    config.headers['Authorization'] = `Bearer ${userToken}`;
    config.headers['x-access-token'] = userToken;
  }

  return config;
});

export default baseAPI;
