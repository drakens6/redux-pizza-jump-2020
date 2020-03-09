import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pizza-builder-app.firebaseio.com/'
});

export default instance;
