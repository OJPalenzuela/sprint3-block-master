import { types } from '../types/types'

const initialState = {
    active: {
        title: '',
        overview: ''
    }
}
export const cardsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.cardActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }

        default:
            return state;
    }
}