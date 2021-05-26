import { url, searchUrl } from './constants';

export const api = {
    nbaPlayerList: () => {
        return fetch(url).then((res) => res.json());
    },
    searchNbaPlayerName: () => {
        return fetch(searchUrl).then((res)=> res.json())
    },
    
}