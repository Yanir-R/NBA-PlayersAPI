import { useState } from "react";
import { Player } from "./react-app-env";

export const useFavorites = (): [any, (id: Player["id"]) => void] => {
    const key = "nbaFavorites";
    const storage: { [key: number]: boolean } = JSON.parse(
        window.localStorage.getItem(key) as string
    );
    const [favorites, setFavorites] =
        useState<{ [key: number]: boolean }>(storage);
    const toggle = (id: Player["id"]) => {
        const newFavorites = { ...favorites, [id]: !favorites[id] };
        localStorage.setItem(key, JSON.stringify(newFavorites));
        setFavorites(newFavorites);
    };

    return [favorites, toggle];
};