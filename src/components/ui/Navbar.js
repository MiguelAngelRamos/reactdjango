import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { myProfile } from '../../api/myProfile';


export const Navbar = () => {
    const [userNavbar, setUserNavBar] = useState({});
    useEffect( ()=> {
        myProfile().then( user => {
            setUserNavBar(user);
        }).catch(err => console.log(err))
    }, []);
    const cleanStorage = () => {
        localStorage.clear();
    }

    const token = localStorage.getItem('token');
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Clientes React Django
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

        
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">
                    <li className="userNavbar">{userNavbar?.email}</li>
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/login"
                        onClick={cleanStorage}
                    >
                        Logout
                    </NavLink>
                </ul>
            </div>
        </nav>
    )
}