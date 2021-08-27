import { useState } from 'react';


export const useDelete = ( initialState = []) => {
    
    const [deletes, setDeletes] = useState(initialState);

    const reset = () => {
        setDeletes( initialState );
    }

    const handleDeleteMovie = (id) => {
        setDeletes([
            ...deletes, id
            ]
            
        )
        console.log(deletes)
    }

    return [ deletes, handleDeleteMovie, reset ];

}