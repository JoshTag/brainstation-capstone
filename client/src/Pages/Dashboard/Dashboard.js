import React, { Component } from 'react';
import axios from 'axios';
import './Dashboard.scss';
import { Route } from 'react-router-dom'; 

// Page Components
import Sideboard from '../../Components/Dashboard/Sideboard';
import MainView from '../MainView/Mainview';

export class DashboardPage extends Component {




    render() {

        

        return (
            <div className="itemMain">
                <Sideboard />
                <div className="dashboardBody">
                    <div className="itemSearch">
                        <input className="itemSearch__search" type="text" placeholder="search"></input>
                        <button className="itemSearch__btn">SEARCH</button>
                    </div>
                    {/* { this.state.isLoaded === true ?  */}
                        <Route 
                            exact
                            render= { (props) => 
                                <MainView 
                                {...props}
                                // itemHistory={this.state.itemHistory}
                                 />} />
                        {/* : null 
                    } */}

                </div>
            </div> 
        )
    }
}

export default DashboardPage;