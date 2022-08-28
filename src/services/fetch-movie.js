function fetchTrendMovies () {
    const API_KEY = "0f4a49552ce13567b5c82d2d8d909ccf"
    return fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`).then(res => {if(res.ok){return res.json()} return Promise.reject(new Error('Nothing found for your request'))})
}

const ApiMovies = {
    fetchTrendMovies
}

export default ApiMovies

   