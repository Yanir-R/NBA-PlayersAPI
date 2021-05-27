import React, { useState } from 'react'
import { Player } from '../../react-app-env';
import '../../App.css';
interface nbaPreviewProps {
    data: Player;

}

export const NbaPreview: React.FC<nbaPreviewProps> = ({ data }) => {
    const initalState = localStorage.favorites ? JSON.parse(localStorage.favorites) : [];
    const [favoritePlayers, setFavoritePlayers] = useState(initalState);

    function toggle(player: Player) {
        let favorites = []
        console.log(player)
        if (localStorage.favorites) {
            favorites = JSON.parse(localStorage.getItem('favorites')!)
            const findPlayer = favorites.find((p: Player) => p.id === player.id)
            // console.log(findPlayer)
            if (findPlayer) {
                favorites = favorites.filter((p: Player) => {
                    return p.id !== findPlayer.id
                })
                localStorage.setItem('favorites', JSON.stringify(favorites))
                setFavoritePlayers(JSON.parse(localStorage.favorites))

            } else {
                favorites = [...favorites, player]
                localStorage.setItem('favorites', JSON.stringify(favorites))
                setFavoritePlayers(JSON.parse(localStorage.favorites))
            }
        } else {
            favorites = [player]
            localStorage.setItem('favorites', JSON.stringify(favorites))
            setFavoritePlayers(JSON.parse(localStorage.favorites))
        }
    }

    return (
        <div className='playerInfoContainer'>
            <header> ID: {data.id}</header>
            <div>
                First Name:  {data.first_name}
            </div>
            <div >
                First Name:  {data.last_name}
            </div>
            <div >
                Team Division:  {data.team.division}
            </div>
            <button onClick={() => {
                toggle(data)
            }}>Button</button>
        </div>
    );
}

