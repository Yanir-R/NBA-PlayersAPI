import React, { useEffect, useState } from 'react'
import { api } from '../../api';
import { url } from '../../constants';
import { Player } from '../../react-app-env';
import { NbaPreview } from '../nbaPlayerPreview/nbaPreview';
import '../../App.css'

export const GeneralList: React.FC = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();
    const [search, setSearch] = useState('')
    const [filteredNbaPlayers, setFilteredNbaPlayers] = useState([]);
    const initalState = localStorage.favorites ? JSON.parse(localStorage.favorites) : [];
    // const [nbalist, setNbaList] = useState([]);
    const [favoritePlayers, setFavoritePlayers] = useState(initalState);
  

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
            <div className="flex-container">
                <div className='flex-child'>
                    <ul>
                        < input type="text" placeholder="Serach Player" onChange={e => setSearch(e.target.value)} />
                        {filteredNbaPlayers.map((player: Player) => (<NbaPreview key={player.id} data={player} />))}
                    </ul>
                </div>
                <div className='flex-child'>
                    <ul>{favoritePlayers.map((p: Player) => (<NbaPreview key={p.id} data={p} />))}
                    </ul>
                </div>
            </div>

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