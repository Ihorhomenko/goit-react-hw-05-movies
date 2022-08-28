import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const CastInformation = () => {
    const {movieId} = useParams()
    const [casts, setCasts] = useState (null)
    const API_KEY = "0f4a49552ce13567b5c82d2d8d909ccf"

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`).then(res => {if(res.ok){return res.json()} return Promise.reject(new Error('Nothing found for your request'))}).then(d => setCasts(d.cast))
    }, [])
    return (
        <div>
             {casts && (
                <ul>
                    {casts.map(cast => 
                    <li key={cast.id}>
                        <img src={`https://image.tmdb.org/t/p/w200/${cast.profile_path}`} alt={cast.character}/>
                        <p>{cast.character}</p>
                    </li>
                        )}
                </ul>
             )}
        </div>
       
    )
}

export default CastInformation