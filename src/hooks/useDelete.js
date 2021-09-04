import { useState } from 'react';


export const useDelete = ( initialState = []) => {
    
    const [deletes, setDeletes] = useState(initialState);

    const reset = () => {
        setDeletes( initialState );
    }

    

    return [ deletes, setDeletes, reset ];

}