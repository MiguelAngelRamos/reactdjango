import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from 'react-router-dom';
import { ModalContext } from '../context/ModalContext';

import Login  from '../components/login/Login';
import ModalBs from '../components/ui/modal/ModalBs';
import { DashboardRoutes } from './DashboardRoutes';


export const AppRouter = () => {
    const {modalState, setModalState} = useContext(ModalContext);
    return (
        <Router>
            <div>
                <Switch> 
                    <Route exact path="/login" component={ Login } />
                    
                    <Route path="/" component={ DashboardRoutes } />
                </Switch>
            </div>
            {modalState && <ModalBs/> }
        </Router>
    )
}