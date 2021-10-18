import React from 'react';
import { Navbar } from '../components/ui/Navbar';
import { Switch, Route, Redirect } from 'react-router-dom';
import Dashboard from '../components/dashboard/Dashboard';
import ModalBs from '../components/ui/modal/ModalBs';


export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/" component={ Dashboard } />
                    <Route exact path="/modal/:id" component={ ModalBs } />
                    <Redirect to="/" />
                </Switch>
            </div>


        </>
    )
}
