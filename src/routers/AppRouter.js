import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom'
import { AuthRouter } from './AuthRoute'
import { MainRoute } from './MainRoute'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'

const AppRouter = () => {
    const [checking, setChecking] = useState(true)
    const [isLooggedIn, setsIsLoogedIn] = useState(true)

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
