import { createContext, useContext, useEffect, useState } from 'react'
import { client } from '../lib/sanity'
export const MovieContext = createContext()
export function MovieDataProvider({ children }) {
    const [movies, setMovies] = useState([])
    const [category, setCategory] = useState([])
    // Loading State
    const [loading, setLoading] = useState()
    const getAllMovies = async () => {
        setLoading(true)
        const movies = await client.fetch('*[_type=="movies"]{_id, cast, name, "imageUrl": poster.asset->url}')
        setLoading(false)
        return setMovies(movies)
    }


    const getAllCategory = async () => {
        const category = await client.fetch('*[_type=="category"]{_id, name, "imageUrl":catImage.asset->url}')
        return setCategory(category)

    }

    useEffect(() => {
        getAllMovies()
        getAllCategory()

    }, [])

    return <MovieContext.Provider value={{ movies, category, loading }}>
        {children}
    </MovieContext.Provider>
}

export function useMovieContext() {

    return useContext(MovieContext)

}