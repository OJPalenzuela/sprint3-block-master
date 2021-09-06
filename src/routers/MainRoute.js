import React from 'react';
import Navbar from '../components/main/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom';
import EditCard from '../components/crud/EditCard';
import MostValued from '../components/main/MostValued';
import Section from '../components/main/Section';
import LeastValued from '../components/main/LeastValued';
import CarauselElement from '../components/main/CarauselElement';

export const MainRoute = () => {
    return (
        <div>
            
            <div>
            <Navbar />
            <CarauselElement />
                <Switch>
                    <Route
                        exact
                        path="/"
                        component={Section}
                    />
                    <Route
                        exact
                        path="/edit"
                        component={EditCard}
                    />
                    <Route 
                        exact
                        path="/most_valued"
                        component={MostValued}
                    />

                    <Route 
                        exact
                        path="/least_valued"
                        component={LeastValued}
                    />
                    <Redirect to="/" />
                </Switch>
            </div>
        </div>
    )
}