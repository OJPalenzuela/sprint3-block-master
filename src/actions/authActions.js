import { types } from "../types/types";
import { firebase, google } from '../firebase/firebaseConfig';
import Swal from "sweetalert2";

import { startLoading, finishLoading } from "./uiErrors";

export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        return firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(startLoading())
                dispatch(
                    login(user.uid, user.displayName)
                )
                console.log('Bienvenid@');
            })
            .catch(e => {
                console.log(e);
                console.log('El usuario no existe');
            })
    }
}


export const registerEmailPasswordName = (email, pass, name) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, pass)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name })

                dispatch(
                    login(user.uid, user.displayName)
                )

                Swal.fire({
                    position: 'center',
                    text: 'Usuario Creado',
                    icon: 'success',
                    title: user.displayName,
                    showConfirmButton: false,
                    timer: 1500
                })
            })
            .catch(e => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: e,
                    footer: ''
                })
            })
    }
}


export const loginGoogle = () => {
    return (dispatch) => {
        dispatch(startLoading())
        firebase.auth().signInWithPopup(google)
            .then(({ user }) => {
                dispatch(login(user.uid, user.displayName))

                dispatch(finishLoading())
            })
    }
}

export const login = (uid, displayName) => ({
    type: types.login,
    payload: {
        uid,
        displayName
    }
});


export const startLogout = () => {
    return async( dispatch ) => {
        await firebase.auth().signOut();
        dispatch( logout());
    }
}


export const logout = () => ({
    type: types.logout
})