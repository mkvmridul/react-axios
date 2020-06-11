import axios from 'axios';

const instance = axios.create({
      baseURL: 'https://jsonplaceholder.typicode.com'
});
// instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

//you can also add interceptors here as well

export default instance;