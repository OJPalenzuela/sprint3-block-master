import Swal from 'sweetalert2'

import { fileUpload } from '../helpers/fileUpload'
import { db } from '../firebase/firebaseConfig'
import { types } from '../types/types'
import { loadCardMovies } from '../helpers/loadCardMovies'


let fileUrl = []

export const CardNew = (movie) => {
    return async (dispatch) => {
        const newCard = {
            title: movie.title,
            overview: movie.overview,
            file: movie.file,
            rating: "",
            url: "",
        }
        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })
        const docRef = await db.collection('Movies').add(newCard)
        Swal.fire('Saved', movie.title, 'success');
        dispatch(addNewCard(docRef.id, newCard))

    }
}

export const Edit = (movie) => {
    return async (dispatch) => {

        if (!movie.url) {
            delete movie.url;
        }

        const EditMovie = {
            title: movie.title,
            overview: movie.overview,
            file: movie.file,
            rating: ""
        }

        const movieFire = { ...EditMovie }
        delete movieFire.id

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        await db.doc(`Movies/${movie.id}`).update(EditMovie)

        Swal.fire('Saved', movie.title, 'success');
        dispatch(ListarMovies())

    }
}

export const Delete = (id) => {
    return async (dispatch) => {

        await db.doc(`Movies/${id}`).delete();
        dispatch(deleteCard(id));
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Delete',
            showConfirmButton: false,
            timer: 1500
        })
        dispatch(ListarMovies())
    }
}

export const deleteCard = (id) => ({
    type: types.cardDelete,
    payload: id
});

export const startUploading = (file) => {
    return async (dispatch) => {

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait ...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading()
            }
        })

        fileUrl = await fileUpload(file)
        Swal.close()

        return fileUrl
    }
}

//FUNCIÓN SINCRÓNICA 

export const addNewCard = (id, movie) => ({
    type: types.cardAddNew,
    payload: {
        id, ...movie
    }
})

export const ListarMovies = () => {
    return async (dispatch) => {
        const movies = await loadCardMovies()
        dispatch(setDBMovies(movies))
    }
}

export const setDBMovies = (movies) => {
    return {
        type: types.cardLoad,
        payload: movies
    }
}

export const activeCard = (id, card) => {
    return {
        type: types.cardActive,
        payload: {
            id,
            ...card
        }
    }
}

export const clearCard = () => {
    return {
        type: types.cardLogoutClean
    }
}
