import React from "react";
import { Player } from "../../react-app-env";
import { NbaPreview } from "../nbaPlayerPreview/nbaPreview";
import "../../App.css";

export const GeneralList: React.FC<{ players: Player[] }> = ({ players }) => {
  return (
    <div className="flex-child">
      <ul>
        {players.map((player: Player) => (
          <NbaPreview key={player.id} data={player} />
        ))}
      </ul>
    </div>
  );
};