const API_KEY = "0f4a49552ce13567b5c82d2d8d909ccf"

function fetchTrendMovies () {
    
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`).then(res => {if(res.ok){return res.json()} return Promise.reject(new Error('Nothing found for your request'))})
}

function fetchReviewsMovies (movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=${API_KEY}&language=en-US&page=1`).then(res => {if(res.ok){return res.json()} return Promise.reject(new Error('Nothing found for your request'))})
}

function fetchQueryMovies (query) {
    return fetch(`
    https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`).then(res => {if(res.ok){return res.json()} return Promise.reject(new Error('Nothing found for your request'))})
}

function fetchCastMovie (movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`).then(res => {if(res.ok){return res.json()} return Promise.reject(new Error('Nothing found for your request'))})
}

function fetchMovies (movieId) {
    return fetch(`
    https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`).then(res => {if(res.ok){return res.json()} return Promise.reject(new Error('Nothing found for your request'))})
}



const ApiMovies = {
    fetchTrendMovies,
    fetchReviewsMovies,
    fetchQueryMovies,
    fetchCastMovie,
    fetchMovies
}

export default ApiMovies

   