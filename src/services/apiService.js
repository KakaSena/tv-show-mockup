import axios from "axios";

const API_BASE_URL = "https://agile-releases.s3.us-east-1.amazonaws.com";

export const fetchShow = async (showId) => {
  const response = await axios.get(
    `${API_BASE_URL}/tests/tv-shows/${showId}.json`
  );

  return response.data;
};

export const fetchEpisodes = async (showId) => {
  const response = await axios.get(
    `${API_BASE_URL}/tests/episodes/${showId}.json`
  );
  return response.data;
};
