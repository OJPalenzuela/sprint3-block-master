import { types } from "../types/types";
import { firebase, google } from '../firebase/firebaseConfig';

export const loginEmailPassword = (email, password) => {
    return (dispatch) => {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
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
            })
            .catch(e => {
                console.log(e);
            })
    }
}


export const loginGoogle = () => {
    return (dispatch) => {
        firebase.auth().signInWithPopup(google)
            .then(({ user }) => {
                console.log(user.displayName, user.uid)
                dispatch(login(user.uid, user.displayName))
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
