import ApiMovies from "services/fetch-movie";
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

const HomePage = () => {
    const [trendMovies, setTrendMovies] = useState(null)
    const location = useLocation()

    useEffect (() => {
        ApiMovies.fetchTrendMovies().then(d => setTrendMovies(d.results))
    }, [])

    
    return (
        trendMovies && (
            <ul>
                {trendMovies.map(movie => (<li key={movie.id}><Link state={{from: location}} to={`/movies/${movie.id}`}>{movie.title}</Link></li>))}
            </ul>
        )
    )
}
export default HomePage