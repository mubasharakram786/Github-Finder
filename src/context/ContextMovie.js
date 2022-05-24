import { useState, createContext } from 'react'

const ContextMovie = createContext();
export const MovieContext = ({ children }) => {
    const [moviesList, setMoviesList] = useState([
        {
            coverPhoto: 'http://beingcovers.com/media/facebook-cover/Pirates-of-The-Caribbean-Movie-facebook-covers-3681.jpg',
            name: 'Pirates of Caribbean: On Stranger Tides',
            rating: 6.6,
        },
        {
            coverPhoto: 'https://i.pinimg.com/236x/ae/19/70/ae197019f8e63a6210993a4aea5a23d6.jpg',
            name: 'Beauty and the Beast',
            rating: 7.1,
        },
        {
            coverPhoto: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Harry_Potter_and_the_Deathly_Hallows_%E2%80%93_Part_1.jpg',
            name: 'Harry Potter and the Deathly Hallows',
            rating: 7.1,
        },
    ])
    // Add Movie
    // const addMovie=()=>{

    // }
    return (
        <ContextMovie.Provider value={{
            moviesList,
        }}>
            {children}
        </ContextMovie.Provider>
    )
}

export default ContextMovie