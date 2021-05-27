import React, { useState } from "react";
import { Player } from "../../react-app-env";
import "../../App.css";
interface nbaPreviewProps {
  data: Player;
}

export const NbaPreview: React.FC<nbaPreviewProps> = ({ data }) => {
  function toggle(id: number) {
    const key = `favorite:${id}`;
    const isFavorite = JSON.parse(localStorage.getItem(key) as string);
    localStorage.setItem(key, JSON.stringify(!isFavorite));
  }

  return (
    <div className="playerInfoContainer">
      <header> ID: {data.id}</header>
      <div>First Name: {data.first_name}</div>
      <div>First Name: {data.last_name}</div>
      <div>Team Division: {data.team.division}</div>
      <button
        onClick={() => {
          toggle(data.id);
        }}
      >
        Button
      </button>
    </div>
  );
};