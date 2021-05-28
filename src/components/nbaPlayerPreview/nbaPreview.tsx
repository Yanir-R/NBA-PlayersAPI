import React, { useContext } from "react";
import { Player } from "../../react-app-env";
import {FavoritesContext} from '../../App'
import "../../App.css";
interface nbaPreviewProps {
  data: Player;
}

export const NbaPreview: React.FC<nbaPreviewProps> = ({ data }) => {
    const {toggleFavorite} = useContext(FavoritesContext)

  return (
    <div className="playerInfoContainer">
      <header> ID: {data.id}</header>
      <div>First Name: {data.first_name}</div>
      <div>Last Name: {data.last_name}</div>
      <div>Team Division: {data.team.division}</div>
      <button
        onClick={() => {
          toggleFavorite(data.id);
        }}
      >
        Button
      </button>
    </div>
  );
};