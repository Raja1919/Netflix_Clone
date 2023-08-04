const API_KEY="005490d586c3c02bec0ae6d5a7087e15"

const endpoints={
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-us`,
    fetchTopRated:`/movie/top_rated?api_key=${API_KEY}&language=en-us`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedymovies:`/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchNetflixOriginals: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&with_genres=99`
}
export default endpoints