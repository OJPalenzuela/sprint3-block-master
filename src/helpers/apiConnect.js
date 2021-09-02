

const API_KEY = "ba637e394d1e5b8a3166bd550b19bb5f"
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&language=es&page=`
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?&api_key=${API_KEY}`

const getMovies = async () => {
    const reponse = await fetch(FEATURED_API + 3);
    const data = await reponse.json()
    const {results} = data
    return results
}
const search = async (name) => {
    const reponse = await fetch(`${SEARCH_API}&query=${name}`);
    const data = await reponse.json()
    const {results} = data
    return results 
}

const getMoviesID = async (name) => {
    const reponse = await fetch(`https://imdb-api.com/en/API/SearchMovie/k_r1xct2m2/${name}`);
    const data = await reponse.json()
    console.log(name, data)
    const {results} = data
    console.log(results)
    if(results === null){
        return ""
    }else{   
        return results[0]
    }
}

const getUrlTrailer = async (name) => {
    const {id} = await getMoviesID(name)
    console.log(id)
    const reponse = await fetch(`https://imdb-api.com/en/API/YouTubeTrailer/k_r1xct2m2/${id}`)
    const data = await reponse.json()
    const {videoUrl} = data
    console.log(videoUrl)
    if(videoUrl === null){
        return ""
    }else{   
        return videoUrl
    }
}


export {search, getMovies, getUrlTrailer}