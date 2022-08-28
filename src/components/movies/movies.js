import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
// import ApiMovies from "services/fetch-movie"

const Movies = () => {
    const [searchMovie, setSearchMovie] = useState('')
    const [movieList, setMovieList] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();

    const API_KEY = "0f4a49552ce13567b5c82d2d8d909ccf"

    const hundleSubmit = (e) => {
        e.preventDefault();
        fetch(`
        https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${searchMovie}&page=1&include_adult=false`).then(res => {if(res.ok){return res.json()} return Promise.reject(new Error('Nothing found for your request'))}).then(d => setMovieList(d.results))
        setSearchParams({query: searchMovie})
    }


    return (
        <>
        <form onSubmit={hundleSubmit}>
            <input
            type="text"
            name="movie"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={(e) => setSearchMovie(e.currentTarget.value)}/>
            
            <button type="submit">search</button>

        </form>
        <ul>
            {movieList && movieList.map(movie => <li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
        </ul>
        </>
        
    )
}

export default Movies 