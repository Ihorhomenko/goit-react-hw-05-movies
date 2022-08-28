import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const MovieReviews = () => {
    const {movieId} = useParams()
    const [reviews, setReviews] = useState (null)
    const API_KEY = "0f4a49552ce13567b5c82d2d8d909ccf"

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`).then(res => {if(res.ok){return res.json()} return Promise.reject(new Error('Nothing found for your request'))}).then(d => setReviews(d.results))
    }, [])
    return (
        <div>
             {reviews && reviews.length > 0 ? (
                <ul>
                    {reviews.map(review => 
                        <li>
                            {
                                <div>
                                <h4>{`Author: ${review.author_details.username}`}</h4>
                                <p>{review.content}</p>
                                </div>
                                
                            }
                        </li>
                    )}
                </ul>
             ) : <p>Reviews not found</p>}
        </div>
       
    )
}

export default MovieReviews