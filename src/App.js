import React, { useEffect, useState } from "react";
import { fetchShow, fetchEpisodes } from "./services/apiService";
import Background from "./components/Background/Background";
import Seasons from "./components/Seasons/Seasons";
import Episodes from "./components/Episodes/Episodes";
import Footer from "./components/Footer/Footer";
import Loading from "./components/Loading";
import styles from "./styles/App.module.css";
import Cast from "./components/Cast";

function App() {
  const [show, setShow] = useState(null);
  const [error, setError] = useState(null);
  const [episodes, setEpisodes] = useState([]);
  const [seasons, setSeasons] = useState([]);
  const [selectedSeason, setSelectedSeason] = useState(null);
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const [showCast, setShowCast] = useState(false);

  const showId = process.env.REACT_APP_SHOW_ID;

  useEffect(() => {
    const fetchData = async () => {
      try {
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
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
      }
    };

    fetchData();
  }, [showId]);

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

  const handleSelectEpisode = (episode) => {
    setSelectedEpisode(episode);
  };

  const handleCastClick = () => {
    setShowCast(true);
  };

  const handleCloseCast = () => {
    setShowCast(false);
  };

  const filteredEpisodes = episodes.filter(
    (episode) => `T${episode.SeasonNumber}` === selectedSeason
  );

  return (
    <div className={styles.appContainer}>
      {show && (
        <Background
          title={show.Title}
          genres={show.Genres}
          year={show.Year}
          image={show.Images.Background}
        />
      )}

      <div className={styles.rightPanel}>
        <div>
          <Seasons
            seasons={seasons}
            selectedSeason={selectedSeason}
            onSelectSeason={handleSelectSeason}
          />
        </div>

        <div className={styles.episodesContainer}>
          <Episodes
            episodes={filteredEpisodes}
            onSelectEpisode={handleSelectEpisode}
          />
        </div>
      </div>

      <Footer onCastClick={handleCastClick} />
    </div>
  );
}

export default App;
