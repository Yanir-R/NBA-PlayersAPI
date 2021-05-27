import React from 'react'



export const useFavoritePlayer = (playerId: string): [boolean, () => void] => {
    const localStorageKey = `favoritePlayerID_${playerId}`
    const [data, setData] = React.useState(!!localStorage.getItem(localStorageKey))
    const toggle = () => {
        if (data) {
            localStorage.removeItem(localStorageKey)
        } else {
            localStorage.setItem(localStorageKey, 'favorite')
        }
        setData(!data);
    }
    return [data, toggle]
}