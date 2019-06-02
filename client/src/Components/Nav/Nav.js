import React, { Component } from 'react';
import './Nav.scss';
import logo from '../../Assets/Logo/Logo.png'

export class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav__container">
                    <img className="nav__logo" src={logo} alt="Logo" />
                    <div className="nav__pages">
                        <p className="nav__pages__home" >Home</p> 
                        <p className="nav__pages__about" >About</p> 
                        <p className="nav__pages__contact" >Profile</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Nav
