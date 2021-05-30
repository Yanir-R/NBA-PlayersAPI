import React, { useEffect, useState } from "react";
import { GeneralList } from "./components/generalList/generalList";
import { Search } from "./components/search/search";
import { api } from "./api";
import { Player } from "./react-app-env";
import { useFavorites } from "./useFavorites";
import { Card, Col, Container, Form, Row } from "react-bootstrap";

type ITheme = 'light' | 'dark'

export const FavoritesContext = React.createContext<{ theme: ITheme, isFavorite: boolean, toggleFavorite: (id: Player['id']) => void }>({ theme: 'light', isFavorite: false, toggleFavorite: (id: Player['id']) => { } });

export const App: React.FC = () => {
  const [data, setData] = useState<Player[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [favorites, toggleFavorite] = useFavorites();
  const [theme, setTheme] = useState<ITheme>('light');

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


  return (
    <Container fluid>
      <Card className="text-center  mb-3 pt-2 mx-4">
        <Card.Header>balldontlie.io API</Card.Header>
        <Card.Body>
          <Card.Title> React JS app that pulls data of NBA players</Card.Title>
          <Card.Text>
            Choose your FAVORITE players!
    </Card.Text>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Search updatePlayers={setData} />
        </Card.Footer>
      </Card>
      <Row>
        <Col >
          <FavoritesContext.Provider
            value={{ theme: 'light', toggleFavorite, isFavorite: false }}>
            <h1 className="text-center p-3">
              NBA Player List:
              </h1>
            <GeneralList players={notFavoritePlayers} />
          </FavoritesContext.Provider>
        </Col>
        <Col >
          <h1 className="text-center ">
            My Favorite NBA Players:
          </h1>
          <Form.Check className='text-center p-1' onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')} type="switch" id="custom-switch" label="Change Background Color" />
          <FavoritesContext.Provider
            value={{ theme, toggleFavorite, isFavorite: true }}>
            <GeneralList players={favoritePlayers} />
          </FavoritesContext.Provider>
        </Col>
      </Row>
    </Container>
  );
};
