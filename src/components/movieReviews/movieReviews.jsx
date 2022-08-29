import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ApiMovies from "services/fetch-movie" 

const MovieReviews = () => {
    const {movieId} = useParams()
    const [reviews, setReviews] = useState (null)
    

    useEffect(() => {
        ApiMovies.fetchReviewsMovies(movieId).then(d => setReviews(d.results))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
             {reviews && reviews.length > 0 ? (
                <ul>
                    {reviews.map(review => 
                        <li key={reviews.id}>
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