import React from 'react'
import { Player } from '../player';
import '../App.css';
interface nbaPreviewProps {
    data: Player;
}

export const NbaPreview: React.FC<nbaPreviewProps> = ({ data }) => {
    
    return (
        <div className='playerInfoContainer'>
            <header> ID: {data.id}</header>
            <div id='name' >
                First Name:  {data.first_name}
            </div>
            <div >
                First Name:  {data.last_name}
            </div>
            <div >
                Team Division:  {data.team.division}
            </div>
            <button>Add to Favorite</button>
        </div>
    );
}