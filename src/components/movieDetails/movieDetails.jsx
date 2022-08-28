import { useState, useEffect } from "react"
import { useParams, useNavigate, Link, Outlet} from "react-router-dom"
import "../movieDetails/movieDetails.css"


const MovieDetails = () => {
    const {movieId} = useParams()
    const [actualMovie, setActualMovie] = useState(null)
    const navigate = useNavigate()
    const API_KEY = "0f4a49552ce13567b5c82d2d8d909ccf"
    useEffect (() => {
        
        fetch(`
        https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(res => {if(res.ok){return res.json()} return Promise.reject(new Error('Nothing found for your request'))}).then(d => setActualMovie(d))

    }, [movieId])



    return (
       <div>
        {console.log(actualMovie)}
        

        {actualMovie && (
            
            <div>
                <button className="btn" type="button" onClick={() => navigate(-1)}>Go back</button>
                <div className="wrapper">
                <div>
                    <img src={`https://image.tmdb.org/t/p/w300/${actualMovie.poster_path}`} alt={actualMovie.title}/>
                </div>
            
                <div className="description">
                    <h2>
                        {`${actualMovie.title} (${actualMovie.release_date.slice(0, 4)})`}
                    </h2>
                    <p>{`User score: ${(actualMovie.vote_average)*10}%`}</p>
                    <h3>Overview</h3>
                    <p>
                        {actualMovie.overview}
                    </p>
                    <h3>Genres</h3>
                    <p>
                        {actualMovie.genres.map(el => `${el.name} `)}
                    </p>
                </div>
                
                   
            </div>
            <div className="moreDetails">
                    <h3>
                        Additional information
                    </h3>
                    <ul className="moreDetailsList">
                        <li>
                            <Link to={`/movies/${movieId}/cast`} className="linkDetails">Cast</Link>
                        </li>
                        <li>
                            <Link to={`/movies/${movieId}/reviews`} className="linkDetails">Reviews</Link>
                        </li>
                    </ul>
                    <Outlet/>
                   
                    

            </div>
        </div>

                
            

        )}
       </div>
    )
    
}

export default MovieDetails