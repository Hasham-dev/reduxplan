import React from 'react';
import { Link } from "react-router-dom";
import SignedInLink from './SignedInLinks';
import SignOutLink from './SignOutLink';


const Navbar = () => {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Redux Plan</Link>
                <SignedInLink />
                <SignOutLink />
            </div>
        </nav>
    )
}

export default Navbar;