import React, { useEffect, useState } from 'react'
import MovieCard from '../cards/MovieCard'
import '../../style/styleSection.css'
import { getMovies } from '../../helpers/apiConnect'
import { useDispatch, useSelector } from 'react-redux'
import { activeCard } from '../../actions/cardActions'
import { useDelete } from '../../hooks/useDelete'


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
        dispatch(activeCard(data.id, data))
    }

    const {active} = useSelector(state => state.card)

    const [deletes, handleDeleteMovie, reset ] = useDelete([])

    return (
        <div >
            <div style={{color: "white"}}
            >Todas las Peliculas</div>

            <div className="section-movies">
            {
                movies.map((data, key) => (
                    deletes.includes(data.id) ? <div style={{display: "none"}} key={key}></div> : <MovieCard deleteMovie={handleDeleteMovie} key={data.id} data={data} click={handleActive}/>
                ))
            }
            </div>
            
        </div>
    )
}

export default Section
