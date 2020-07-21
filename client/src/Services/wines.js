import api from './api-helper';

// View Inventory:

export const getAllWines = async () => {
  const resp = await api.get('/wines');
  return resp.data;
};

// Search Inventory:

export const getOneWine = async (id) => {
  const resp = await api.get(`/wine/${id}`);
  return resp.data;
}

// Create Wine:

export const postWine = async (wineData) => {
  const resp = await api.post('/wines', { wine: wineData })
  return resp.data;
}

// Not sure

export const putWine = async (id, wineData) => {
  const resp = await api.put(`/wines/${id}`, { wine: wineData })
  return resp.data;
}

// Delete Wine:

export const deleteWine = async (id) => {
  const resp = await api.delete(`/wines/${id}`);
  return resp
}