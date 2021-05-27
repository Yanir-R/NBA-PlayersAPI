import React, { useEffect, useState } from "react";
import { GeneralList } from "./components/generalList/generalList";

import "./App.css";
import { api } from "./api";
import { Player } from "./react-app-env";
import { searchUrl } from "./constants";
interface AppProps { }

export const App: React.FC<AppProps> = () => {
  const [filteredNbaPlayers, setFilteredNbaPlayers] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [search, setSearch] = useState('');


  useEffect(() => {
    setLoading(true);
    api
      .searchNbaPlayerName(search)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [search]);

  useEffect(() => {
    setLoading(true);
    api
      .nbaPlayerList()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Data is loading...</p>;
  }

  if (error || !Array.isArray(data)) {
    return <p>There was an error loading your data!</p>;
  }

  return (
    <>

      <div className="flex-container">

        <div className="flex-child">
          <input
            type="text"
            placeholder="Search Player"
            onChange={(e) => setSearch(e.target.value)}
          />
          <GeneralList players={data} />
        </div>
        <div className="flex-child">
          <GeneralList players={data} />
        </div>
      </div>
    </>
  );
};