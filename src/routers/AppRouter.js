import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect
} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { AuthRouter } from './AuthRoute'
import { MainRoute } from './MainRoute'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'
import {firebase} from '../firebase/firebaseConfig'
import { login } from '../actions/authActions';
import Loading from '../components/tasks/Loading';

const AppRouter = () => {
    const dispatch = useDispatch()

    const [checking, setChecking] = useState(true)
    const [isLooggedIn, setsIsLoogedIn] = useState(false)

    useEffect(() => {
        firebase.auth().onAuthStateChanged(async(user)=>{
            if(user?.uid){
                dispatch(login(user.uid, user.displayName))
                setsIsLoogedIn(true)
            }else{
                setsIsLoogedIn(false)
            }

            setChecking(false)
        })
    }, [dispatch, setChecking])

    if(checking){
        return <Loading />
    }

    return (
        <Router>
            <Switch>
                <PublicRoute
                    path="/auth"
                    component={AuthRouter}
                    isAuthenticated={isLooggedIn}
                />

                <PrivateRoute
                    path="/"
                    component={MainRoute}
                    isAuthenticated={isLooggedIn}
                />

                <Redirect to="/auth/login" />
            </Switch>
        </Router>
    )
}

export default AppRouter
