import { useState } from 'react';


export const useDelete = ( initialState = localStorage.getItem("deletes").split(",")) => {
    
    const [deletes, setDeletes] = useState(initialState);

    const reset = () => {
        setDeletes( initialState );
    }

    const handleDelete = (id) => {
        localStorage.setItem("deletes", [localStorage.getItem("deletes"), id])
        const de = localStorage.getItem("deletes")

        setDeletes(de.split(","))
    }
    return [ deletes, handleDelete, reset ];

}