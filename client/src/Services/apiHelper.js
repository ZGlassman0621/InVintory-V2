import api from "./apiConfig";

export const getWines = async () => {
  const response = await api.get("/wines");
  return response.data;
};
