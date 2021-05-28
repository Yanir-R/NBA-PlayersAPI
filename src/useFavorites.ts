import { useState } from 'react'
import { Player } from './react-app-env'

export const useFavorites = (): [any, (id: Player['id']) => void] => {
    const key = 'nbaFavorites'
    const storage = JSON.parse(localStorage.getItem(key) as string) || {}
    const [favorites, setFavorites] = useState(storage)
    const toggle = (id: Player['id']) => {
        favorites[id] = !favorites[id]
        localStorage.setItem(key, JSON.stringify(favorites))
        setFavorites(favorites)
    }

    return [favorites, toggle]
}