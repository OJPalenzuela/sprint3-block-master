import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Login from '../components/auth/Login'
import Register from '../components/auth/Register';

export const AuthRouter = () => {
    return (
        <div className="auth__main">
            <div className="auth__box-container">
                <Switch>
                    <Route 
                        exact
                        path="/auth/login"
                        component={ Login }
                    />

                    <Route 
                        exact
                        path="/auth/register"
                        component={ Register }
                    />

                    <Redirect to="/auth/login" />

                </Switch>
            </div>

        </div>
    )
}