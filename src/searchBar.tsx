import React, { useState } from 'react'

import { searchUrl } from './constants';
import { Player } from './player';

interface searchBarProps {

}

export const SearchBar: React.FC<searchBarProps> = () => {

    const [search, setSearch] = useState('')
    const [nbalist, setNbaList] = useState([]);

    fetch(searchUrl)
        .then(response => response.json())
        .then(data => console.log(data));

    const filterPlayers = nbalist.filter((list: Player) => {
        return list.first_name.toLowerCase().includes(search.toLowerCase())
    })

    return (
        <>
            < input type="text" placeholder="search" onChange={e => setSearch(e.target.value)} />
            { filterPlayers}
        </>
    );
}
