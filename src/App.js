import React, { useEffect, useState } from "react";
import { fetchShow } from "./services/apiService";
import Header from "./components/Header";
import Loading from "./components/Loading";
import styles from "./styles/App.module.css";

function App() {
  const [show, setShow] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const showId = "SHOW123";
      const show = await fetchShow(showId);
      console.log("api response", show); // Log the API response
      setShow(show);
    };

    fetchData();
  }, []);

  if (!show) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className={styles.app}>
      <Header
        title={show.Title}
        genres={show.Genres}
        year={show.Year}
        image={show.Images?.Background}
      />
    </div>
  );
}

export default App;
