import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { useSearchParams } from "react-router-dom"
import ApiMovies from "services/fetch-movie"
import "../movies/movies.css"

const Movies = () => {
    const [searchMovie, setSearchMovie] = useState('')
    const [movieList, setMovieList] = useState(null)
    const [searchParams, setSearchParams] = useSearchParams();
    const query = searchParams.get("query");
    const [val, setVal] = useState()

    const hundleSubmit = (e) => {
        e.preventDefault();
        setSearchParams({query: searchMovie})
        setVal(() => "")
                
    }

    useEffect (() => {
        query && ApiMovies.fetchQueryMovies(query).then(d => setMovieList(d.results))
    }, [query])


    return (
        <>
        <form onSubmit={hundleSubmit}>
            <input
            className="input"
            type="text"
            value={val}
            name="movie"
            placeholder="Input title"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            onChange={(e) => setSearchMovie(e.currentTarget.value)}/>
            
            <button className="form-btn" type="submit">search</button>

        </form>
        <ul>
            {movieList && movieList.map(movie => <li key={movie.id}><Link state={{from: `/movies/?query=${query}`}} to={`/movies/${movie.id}`}>{movie.title}</Link></li>)}
        </ul>
        </>
        
    )
}

export default Movies 