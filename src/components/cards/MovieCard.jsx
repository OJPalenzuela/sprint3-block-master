import React, { memo } from 'react'
import '../../style/styleMovieCard.css'

const IMG_API = 'https://image.tmdb.org/t/p/w500/'

const MovieCard = memo(({
    title,
    poster_path,
    vote_average
}) => {
    return (
        <div className="card-movie">
            
                <div className="rating"><i style={{color: "#FED941"}} className="fas fa-star"></i>{" "}{vote_average}</div>
                <img className="img-card" src={IMG_API + poster_path} alt="" /> 
            
        </div>
    )
})

export default MovieCard
