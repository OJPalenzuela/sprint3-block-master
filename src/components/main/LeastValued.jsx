import React, { useEffect, useState } from "react";
import MovieCard from "../cards/MovieCard";
import "../../style/styleSection.css";
import { useSelector, useDispatch } from "react-redux";
import { findMovies, searchBy } from "../../actions/moviesActions";
import { useDelete } from "../../hooks/useDelete";
import found from "../../assets/svg/not-found.svg"
import CarauselElement from "./CarauselElement";

const LeastValued = () => {
    const [movies, setMovies] = useState([]);
    const [initial, setInitial] = useState(true)
    const [pages] = useState(1)
    const [deletes, handleDeleteMovie] = useDelete([]);
    const moviesResult = useSelector((store) => store.movies.results);
    const moviesName = useSelector((store) => store.movies.name);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(searchBy("popularity.asc"))

        if (initial) {
            dispatch(findMovies(pages));
            setInitial(false)
        } else {
            setMovies(moviesResult);
        }

    }, [moviesResult, initial, dispatch, pages]);

    return (
        <div>
            <CarauselElement />
            <div>
            <h1 style={{ color: "white" }}>Menos populares</h1>
            <div className="section-movies">
                {
                    (movies.length > 0) ?
                        (
                            movies?.map(
                                (data, key) =>
                                    deletes.includes(data.id) ?
                                        (<div style={{ display: "none" }} key={key}></div>)
                                        :
                                        (<MovieCard
                                            deleteMovie={handleDeleteMovie}
                                            key={data.id}
                                            data={data}
                                        />)
                            ))
                        :
                        (<div className="text-center text-white">
                            <img src={found} alt="" />
                            <h2>No se encontaron resultados para "{moviesName}"</h2>
                        </div>)
                }
            </div>
        </div>
        </div>
        
    )
}

export default LeastValued
