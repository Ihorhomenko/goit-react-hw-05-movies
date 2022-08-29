import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ApiMovies from "services/fetch-movie" 

const CastInformation = () => {
    const {movieId} = useParams()
    const [casts, setCasts] = useState (null)

    useEffect(() => {
        ApiMovies.fetchCastMovie(movieId).then(d => setCasts(d.cast))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
             {casts && (
                <ul>
                    {casts.map(cast => 
                    <li key={cast.id}>
                        {cast.profile_path && <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.character}/>}
                        <p>{cast.character}</p>
                    </li>
                        )}
                </ul>
             )}
        </div>
       
    )
}

export default CastInformation