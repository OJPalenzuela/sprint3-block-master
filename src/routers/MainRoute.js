import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import EditCard from '../components/crud/EditCard';

import Home from '../components/main/Home'

export const MainRoute = () => {
    return (
        <div className="auth__main">
            <div className="main__box-container">
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Home}
                    />
                    <Route
                        exact
                        path="/edit"
                        component={EditCard}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    )
}