

const API_KEY = "ba637e394d1e5b8a3166bd550b19bb5f"
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=es&page=`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}&query=`

export const getMovies = async (setMovies) =>{
    const reponse = await fetch(FEATURED_API+2);
    const data = await reponse.json()
    const {results} = data
    setMovies(results)
    console.log(results)
}