import React, { useEffect, useState } from "react";
import { fetchShow, fetchEpisodes } from "./services/apiService";
import Header from "./components/Header";
import Seasons from "./components/Seasons";
import Episodes from "./components/Episodes";
import EpisodeDetails from "./components/EpisodeDetails";
import Loading from "./components/Loading";
import styles from "./styles/App.module.css";

function App() {
  const [show, setShow] = useState(null);
  const [error, setError] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const showId = "SHOW123";
        const show = await fetchShow(showId);
        const episodes = await fetchEpisodes(showId);

        setShow(show);

        const validEpisodes = episodes.filter((episode) => episode !== null);
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

        console.log("show api response", show); // Log the API response
        console.log("episodes api response", episodes); // Log the API response
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!show) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleSelectSeason = (season) => {
    setSelectedSeason(season);
    setSelectedEpisode(null);
  };

  const handleSelectEpisode = (episodes) => {
    setSelectedEpisode(episodes);
  };

  const filteredEpisodes = episodes.filter(
    (episode) => `T${episode.SeasonNumber}` === selectedSeason
  );

  return (
    <div className={styles.app}>
      <Header
        title={show.Title}
        genres={show.Genres}
        year={show.Year}
        image={show.Images?.Background}
      />
      <Seasons seasons={seasons} onSelectSeason={handleSelectSeason} />+
      <p>Selected Season: {selectedSeason}</p>
      <Episodes
        episodes={filteredEpisodes}
        onSelectEpisode={handleSelectEpisode}
      />
      {selectedEpisode && <EpisodeDetails episode={selectedEpisode} />}
    </div>
  );
}

export default App;
