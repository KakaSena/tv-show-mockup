import { useState, useEffect } from "react";
import { fetchShow, fetchEpisodes } from "../services/apiService";

const useShowData = (showId) => {
  const [show, setShow] = useState(null);
  const [error, setError] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const showData = await fetchShow(showId);
        const episodeData = await fetchEpisodes(showId);

        setShow(showData);

        const validEpisodes = episodeData.filter((episode) => episode !== null);
        setEpisodes(validEpisodes);

        const uniqueSeasons = [
          ...new Set(
            validEpisodes.map((episode) => `T${episode.SeasonNumber}`)
          ),
        ];
        setSeasons(uniqueSeasons);

        if (uniqueSeasons.length > 0) {
          setSelectedSeason(uniqueSeasons[0]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [showId]);

  const handleSelectSeason = (season) => {
    setSelectedSeason(season);
    setSelectedEpisode(null);
  };

  const handleSelectEpisode = (episode) => {
    setSelectedEpisode(episode);
  };

  const filteredEpisodes = episodes.filter(
    (episode) => `T${episode.SeasonNumber}` === selectedSeason
  );

  return {
    show,
    error,
    episodes,
    seasons,
    selectedSeason,
    selectedEpisode,
    filteredEpisodes,
    handleSelectSeason,
    handleSelectEpisode,
  };
};

export default useShowData;
