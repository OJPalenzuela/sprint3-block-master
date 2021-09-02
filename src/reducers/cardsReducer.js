import { types } from '../types/types'

const initialState = {
    card: [],
    active: {
        title: '',
        overview: '',
        poster_path: '',
        url: '',
        rating: ''

    },
    videoUrl: ''
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
        case types.movieCardTrailer:
            return {
                ...state,
                videoUrl: action.payload.videoUrl
            }
        case types.cardAddNew:
            return {
                ...state,
                card: [action.payload, ...state.card]
            }

        case types.cardLoad:
            return {
                ...state,
                card: [...action.payload]
            }


        case types.cardUpdate:
            console.log(action.payload.id)
            return {
                ...state,
                card: state.card.map(
                    card => card.id === action.payload.id
                        ? action.payload.card
                        : card
                )
            }

        case types.cardLogoutClean:
            return {
                ...state,
                active: {
                    title: '',
                    overview: '',
                    poster_path: '',
                    url: '',
                }
            }

        default:
            return state;
    }
}