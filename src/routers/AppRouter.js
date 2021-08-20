import React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route
 } from 'react-router-dom'
import Login from '../components/Login'
import Register from '../components/Register'

const AppRouter = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
            </Switch>
        </Router>
    )
}

export default AppRouter
