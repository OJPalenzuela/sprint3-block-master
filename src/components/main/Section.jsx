import React, { useEffect, useState } from 'react'
import MovieCard from '../cards/MovieCard'
import '../../style/styleSection.css'
import { memo } from 'react'
import { getMovies } from '../../helpers/apiConnect'
import { useDispatch } from 'react-redux'
import { activeCard } from '../../actions/cardActions'

const exp = [
    793002
]

const Section = () => {

    const dispatch = useDispatch()

    const [movies, setMovies] = useState([])
    const [pages, setPages] = useState(1)

    useEffect(() => {
        getMovies(setMovies)
    }, [])

    const change = () => {
        setPages(pages + 1)
        // console.log(pages)
    }

    const handleActive = (data) => {
        // console.log(data)
        dispatch(activeCard(data.id, data))
    }

    return (
        <div >
            <div onClick={() => console.log(exp.includes(movies[1].id))} style={{color: "white"}}
            >Todas las peliculas</div>

            <div className="section-movies">
            {
                movies.map(data => (
                    exp.includes(data.id) ? <></> : <MovieCard key={data.id} data={data} click={handleActive}/>
                ))
            }
            </div>
            
        </div>
    )
}

export default Section
