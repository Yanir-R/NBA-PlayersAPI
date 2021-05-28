import React, { useEffect, useState } from "react";
import { api } from "../../api";
import { Player } from "../../react-app-env";

interface AppProps {
    updatePlayers: (players: Player[]) => void
}

export const Search: React.FC<AppProps> = ({ updatePlayers }) => {
    const [search, setSearch] = useState("");
    useEffect(() => {
        api
            .searchNbaPlayerName(search)
            .then((res) => {
                updatePlayers(res.data);
            })
    }, [search]);

    return (
        <>
            <input
                type="text"
                placeholder="Search Player"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />
        </>
    );
};