import React, { Component } from 'react';
import './Nav.scss';
import logo from '../../Assets/Logo/Logo.png';
import { Link } from 'react-router-dom';

export class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__container">
                    <img className="nav__logo" src={logo} alt="Logo" />
                    <div className="nav__pages">
                        <Link to="/" className="nav__pages--links" >Home</Link>
                        <Link to="/dashboard" className="nav__pages--links" >About</Link>
                        <Link to="/dashboard" className="nav__pages--links" >Profile</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav
