import { types } from '../types/types'

const initialState = {
    cards: [],
    active: null
}
export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.cardAddNew:
            return {
                ...state,
                card: [action.payload, ...state.card]
            }

        default:
            return state;
    }
}