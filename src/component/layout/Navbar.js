import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarLink = ({ to, label }) =>
    (
        <li className="nav-item">
            <NavLink to={to} activeClassName="active" className="nav-link" >{label}</NavLink>
        </li>
    )

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" >Nassef</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <NavbarLink to='/login' label="Login" />
                        <NavbarLink to='/signup' label="SignUp" />
                    </ul>
                </div>
            </nav>
        );
    }
}
export default Navbar;
