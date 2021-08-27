import { types } from '../types/types';


export const setError = (err) => {
    return {
        type: types.uiSetError,
        payload: err
    }
}
export const removeError = () => ({
        type: types.uiRemoveError,
    }
)
export const startLoading = () => {
    return {
        type: types.uiStartLoading,
    }
}
export const finishLoading = () => ({
    type: types.uiFinishLoading
})