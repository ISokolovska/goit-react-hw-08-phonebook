import axios from 'axios';
import localStorage from 'redux-persist/es/storage';

axios.defaults.baseURL = 'https://6391cb6eac688bbe4c52c11a.mockapi.io';

export const getContactsApi = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const addContactApi = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};

export const deleteContactApi = async id => {
  await axios.delete(`/contacts/${id}`);
  return id;
};

const $publicHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: { 'Content-Type': 'application/json' },
});

const $privateHost = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
  headers: { 'Content-Type': 'application/json' },
});

const authInterceptor = config => {
  config.headers['Authorization'] = localStorage.getItem('token');
  return config;
};

$privateHost.interceptors.request.use(authInterceptor);

export const signUpRequest = async formData => {
  const { data } = await $publicHost.post('/users/signup', formData);
  return data;
};

export const signInRequest = async formData => {
  const { data } = await $publicHost.post('/users/login', formData);
  return data;
};

// export const getContactsRequest = async () => {
//   const { data} = await $privateHost.get('/contacts');
//   return data;
// };
