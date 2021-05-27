import React, { useEffect, useState } from 'react'
import { api } from '../../api';
import { url } from '../../constants';
import { Player } from '../../interface/player';
import { NbaPreview } from '../nbaPlayerPreview/nbaPreview';

export const GeneralList: React.FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [search, setSearch] = useState('')
    const [filteredNbaPlayers, setFilteredNbaPlayers] = useState([]);
    // const [nbalist, setNbaList] = useState([]);

    api.searchNbaPlayerName()

    useEffect(() => {
        setLoading(true);
        fetch(url)
            .then((res) => res.json())
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

    useEffect(() => {
        setFilteredNbaPlayers(
            data.filter((list: Player) => {
                return list.first_name.toLowerCase().includes(search.toLowerCase())
            })
        )
    }, [search, data])

    if (loading) {
        return <p>Data is loading...</p>;
    }

    if (error || !Array.isArray(data)) {
        return <p>There was an error loading your data!</p>;
    }

    return (
        <>
            < input type="text" placeholder="search" onChange={e => setSearch(e.target.value)} />
            <ul>
                {filteredNbaPlayers.map((player: Player) => (<NbaPreview key={player.id} data={player} />))}
            </ul>

        </>
    );





}










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