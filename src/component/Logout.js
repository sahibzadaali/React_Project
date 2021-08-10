import React from 'react';
import {
    Redirect
} from 'react-router-dom';
import NavBarMenu from './NavBarMenu';

const Logout = () => {
    <NavBarMenu />
    localStorage.clear();
    return (
        <Redirect to="/login"></Redirect>
    )
}

export default Logout;