import { getByTitle } from "@testing-library/react"
import { types } from "../types/types"

export const activeCard = (id,card) => {
    return{
        type: types.cardActive,
        payload:{
            id,
            ...card
        }
    }
}
