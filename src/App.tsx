import React, { useEffect, useState } from "react";
import { GeneralList } from "./components/generalList/generalList";
import { Search } from "./components/search/search";
import "./App.css";
import { api } from "./api";
import { Player } from "./react-app-env";
import { useFavorites } from "../src/useFavorites";
interface AppProps { }

export const FavoritesContext = React.createContext<{ toggleFavorite: (id: Player['id']) => void }>({ toggleFavorite: (id: Player['id']) => { } });

export const App: React.FC<AppProps> = () => {
  const [data, setData] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [favorites, toggleFavorite] = useFavorites();

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

  const favoritePlayers = data.filter((player) => favorites[player.id]);
  const notFavoritePlayers = data.filter((player) => !favorites[player.id]);
  console.log('fav', favorites)
  return (
    <>
      <Search updatePlayers={setData} />
      <div className="flex-container">
        <FavoritesContext.Provider value={{ toggleFavorite }}>
          <div className="flex-child">
            <GeneralList players={notFavoritePlayers} />
          </div>
          <div className="flex-child">
            <GeneralList players={favoritePlayers} />
          </div>
        </FavoritesContext.Provider>
      </div>
    </>
  );
};