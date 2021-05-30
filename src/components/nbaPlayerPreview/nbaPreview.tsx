import React, { useContext } from "react";
import { Player } from "../../react-app-env";
import { FavoritesContext } from '../../App'
import { Badge, Button, Card } from "react-bootstrap";
interface nbaPreviewProps {
  data: Player;
}

export const NbaPreview: React.FC<nbaPreviewProps> = ({ data }) => {
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext)
  return (

    <Card border='info' className="mb-3 pt-2 mx-4 ">
      <Card.Header >
        <Badge pill variant="info">ID: {data.id}</Badge>
      </Card.Header>
      <Card.Body>
        <Card.Title> Name: {data.first_name}</Card.Title>
        <Card.Text>
          Last Name: {data.last_name}
        </Card.Text>
        <Card.Text>
          Team Division: {data.team.division}
        </Card.Text>
      </Card.Body>
      <Button
        variant="outline-primary"
        onClick={() => {
          toggleFavorite(data.id);
        }}
      >
        {isFavorite ? 'Remove' : 'Add'}
      </Button>
    </Card>
  );
};
