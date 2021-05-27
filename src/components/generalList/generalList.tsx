import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { url } from "../../constants";
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

// fetch(url)
//     .then((resp) => resp.text()
//         .then((data) => {
//             return document.getElementById('container')!.innerHTML = data;
//         }));
// const [player, setPlayer] = React.useState(null);

// React.useEffect(() => {
//     fetch(url)
//         .then((response) => response.json())
//         .then((data) => setPlayer(data));
// }, []);
// React.useEffect(() => {
//     getUser();
// }, []);

// async function getUser() {
//     const response = await fetch(url);
//     const data = await response.json();
//     setPlayer(data);
// }