import api from './api-helper';

// Create User:

export const postUser = async (userData) => {
  const resp = await api.post('/users', { user: userData })
  return resp.data;
};

export const putUser = async (userData) => {
  const resp = await api.post('/users', { user: userData })
  return resp.data;
};

export const getUsers = async (id) => {
  const resp = await api.get(`/user/${id}`);
  return resp.data;
}