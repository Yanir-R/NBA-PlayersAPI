import React from "react";
import { Player } from "../../react-app-env";
import { NbaPreview } from "../nbaPlayerPreview/nbaPreview";

export const GeneralList: React.FC<{ players: Player[] }> = ({ players }) => {
  return (
    <div>
      <ul>
        {players.map((player: Player) => (
          <NbaPreview key={player.id} data={player} />
        ))}
      </ul>
    </div>
  );
};