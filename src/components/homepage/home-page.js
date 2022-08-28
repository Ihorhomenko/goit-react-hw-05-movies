import ApiMovies from "services/fetch-movie";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

const HomePage = () => {
    const [trendMovies, setTrendMovies] = useState(null)

    useEffect (() => {
        ApiMovies.fetchTrendMovies().then(d => setTrendMovies(d.results))
    }, [])

    
    return (
        trendMovies && (
            <ul>
                {trendMovies.map(movie => (<li key={movie.id}><Link to={`/movies/${movie.id}`}>{movie.title}</Link></li>))}
            </ul>
        )
    )
}
export default HomePage