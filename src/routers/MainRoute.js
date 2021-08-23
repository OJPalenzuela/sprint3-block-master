import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../components/main/Home'
import Test from '../components/main/Test';

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
                        path="/test"
                        component={Test}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    )
}