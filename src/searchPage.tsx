import React, { useEffect, useState } from 'react'
import { searchUrl } from './constants';
import { NbaList } from './nbaList';
import { Player } from './player';
import { SearchBar } from './searchBar';


interface searchPageProps {

}

export const SearchPage: React.FC<searchPageProps> = ({ props }) => {

    const [input, setInput] = useState('');
    const [nbaListDefault, setNbaListDefault] = useState();
    const [nbaList, setnbaList] = useState();
    const fetchData = () => {
        return fetch(searchUrl)
            .then(response => response.json())
            .then(data => {
                setnbaList(data)
                setNbaListDefault(data)
            });
    }

    const updateInput = (input: Player) => {
        const filtered = nbaListDefault.filter((nbaPlayer: Player) => {
            return nbaPlayer.first_name.toLowerCase().includes(input.first_name.toLowerCase())
        })
        setInput(input.first_name);
        setNbaListDefault(filtered);
    }

    useEffect(() => { fetchData() }, []);

    return (
        <>
            <h1>nba Player Search</h1>
            <SearchBar
                input={input}
                onChange={updateInput}
            />
            <NbaList nbaList={{ nbaList }}  />
        </>
    );
}