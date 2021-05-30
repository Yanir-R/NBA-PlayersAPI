import React, { useContext } from "react";
import { FavoritesContext } from "../../App";
import { Player } from "../../react-app-env";
import { NbaPreview } from "../nbaPlayerPreview/nbaPreview";

export const GeneralList: React.FC<{ players: Player[] }> = ({ players }) => {
  const { theme } = useContext(FavoritesContext)


  return (
    <div className={theme}>
      <ul>
        {players.map((player: Player) => (
          <NbaPreview key={player.id} data={player} />
        ))}
      </ul>
    </div>
  );
};
