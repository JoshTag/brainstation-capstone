import React, { Component } from 'react';
import './Dashboard.scss';
import { Route } from 'react-router-dom'; 
import Sideboard from '../../Components/Sideboard/Sideboard';
import MainView from '../MainView/Mainview';

export class DashboardPage extends Component {
    render() {
        return (
            <div className="itemMain">
                <Sideboard className="sideNav" />
                <div className="dashboardBody">
                    <div className="itemSearch">
                        <input className="itemSearch__search" type="text" placeholder="search"></input>
                        <button className="itemSearch__btn">SEARCH</button>
                    </div>
                <Route 
                    exact
                    render= { (props) => 
                        <MainView {...props} />} />
                </div>
            </div>  
        )
    }
}

export default DashboardPage;