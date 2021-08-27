import React, { useEffect, useState } from 'react'
import MovieCard from '../cards/MovieCard'
import '../../style/styleSection.css'
import { memo } from 'react'
import { getMovies } from '../../helpers/apiConnect'



const Section = memo(() => {

    const [movies, setMovies] = useState([])
    const [pages, setPages] = useState(1)

    useEffect(() => {
        getMovies(setMovies)
    }, [])

    const change = () => {
        setPages(pages + 1)
        console.log(pages)
    }

    return (
        <div className="section-movies">
            <div
                onClick={() => change()}
            >A</div>
            {
                movies.map(data => (
                    <MovieCard key={data.id} {...data} />
                ))
            }
        </div>
    )
})

export default Section
