import React from 'react';
import Navbar from '../components/main/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom';
import EditCard from '../components/crud/EditCard';
import MostValued from '../components/main/MostValued';
import Section from '../components/main/Section';
import LeastValued from '../components/main/LeastValued';

export const MainRoute = () => {
      
if(localStorage.getItem("deletes") === undefined || localStorage.getItem("deletes") === ""){
    localStorage.setItem("deletes", {});
}
    return (
        <div>
            
            <div>
            <Navbar />
            
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