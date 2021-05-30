import {
    url,
    searchUrl
} from "./constants";

export const api = {
    nbaPlayerList: () => {
        return fetch(url).then((res) => res.json());
    },
    searchNbaPlayerName: (query: string) => {
        return fetch(`${searchUrl}${query}`).then((res) => res.json());
    },
};
