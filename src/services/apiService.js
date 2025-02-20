import axios from "axios";

const API_BASE_URL = "https://sample-api-78c77.firebaseio.com";

export const fetchShow = async (showId) => {
  const response = await axios.get(`${API_BASE_URL}/tv-shows/${showId}.json`);

  return response.data;
};

export const fetchEpisodes = async (showId) => {
  const response = await axios.get(`${API_BASE_URL}/episodes/${showId}.json`);
  return response.data;
};
