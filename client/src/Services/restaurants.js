import api from './api-helper';

export const getRestaurants = async () => {
  const resp = await api.get('/restaurants');
  return resp.data;
};

export const postRestaurants = async (restaurantData) => {
  const resp = await api.post('/restaurants', { restaurant: restaurantData })
  return resp.data;
}