import React, { useEffect, useState } from "react";
import { fetchShow, fetchEpisodes } from "./services/apiService";
import Background from "./components/Background/Background";
import Seasons from "./components/Seasons/Seasons";
import Episodes from "./components/Episodes/Episodes";
import Footer from "./components/Footer/Footer";
import styles from "./styles/App.module.css";
import Loading from "./components/Loading/Loading";
import useShowData from "./hooks/useShowData";

function App() {
  const showId = process.env.REACT_APP_SHOW_ID;
  const {
    show,
    error,
    filteredEpisodes,
    seasons,
    selectedSeason,
    selectedEpisode,
    handleSelectSeason,
    handleSelectEpisode,
  } = useShowData(showId);

  if (error) return <div>Error: {error.message}</div>;
  if (!show) return <Loading />;

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

      <Footer cast={show.Cast} show={show} />
    </div>
  );
}

export default App;
