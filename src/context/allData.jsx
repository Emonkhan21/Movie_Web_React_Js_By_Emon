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
        const movies = await client.fetch('*[_type=="movies"]{_id, cast, Name, "imageUrl": poster.asset->url}')
        setLoading(false)
        return setMovies(movies)
    }


    const getAllCategory = async () => {
        const category = await client.fetch('*[_type=="category"]{_id, name, "imageUrl":catImage.asset->url}')
        return setCategory(category)

    }



// UserSearch value

const getUserSearchData=(e)=>{

const userSearchValue = e.target.value
getUserMovie(userSearchValue)

}

// Get movie by user search

const getUserMovie= async (userData)=>{
    const query= ` *[_type=="movies" && (Name match "${userData}*")] {_id,Name,
        "imageUrl":poster.assset->url,cast,category->{name},desc,releseDate,trailerUrl}`

     

const searchMovieResult=await client.fetch(query)

// setMovies(searchMovieResult)
console.log(searchMovieResult)

}




    useEffect(() => {
        getAllMovies()
        getAllCategory()

    }, [])

    return <MovieContext.Provider value={{ movies, category, loading,getUserSearchData }}>
        {children}
    </MovieContext.Provider>
}

export function useMovieContext() {

    return useContext(MovieContext)

}